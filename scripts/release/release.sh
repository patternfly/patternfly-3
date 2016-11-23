#!/bin/sh

default()
{
  # Add paths to env (non-Travis build)
  if [ -z "$TRAVIS" ]; then
    PATH=/bin:/usr/bin:/usr/local/bin:$PATH
    export PATH
  fi

  SCRIPT=`basename $0`
  SCRIPT_DIR=`dirname $0`
  SCRIPT_DIR=`cd $SCRIPT_DIR; pwd`

  . $SCRIPT_DIR/env.sh
  . $SCRIPT_DIR/common.sh

  BOWER_JSON=bower.json
  PACKAGE_JSON=package.json
  SHRINKWRAP_JSON=npm-shrinkwrap.json

  TMP_DIR="/tmp/patternfly-releases"
  PTNFLY_DIR="$TMP_DIR/patternfly"
  VERIFY_DIR="$TMP_DIR/patternfly-verify"

  # For Travis, build the current repo instead of using a clone.
  if [ -n "$TRAVIS" ]; then
    PTNFLY_DIR=`cd $SCRIPT_DIR/../..; pwd`
  fi
}

# Bump version number in bower.json
#
bump_bower()
{
  echo "*** Bumping version in $BOWER_JSON to $VERSION"
  cd $PTNFLY_DIR

  sed "s|\"version\":.*|\"version\": \"$VERSION\",|" $BOWER_JSON > $BOWER_JSON.tmp
  check $? "Version bump failure"

  mv $BOWER_JSON.tmp $BOWER_JSON
}

# Bump version number in package.json
#
bump_package()
{
  echo "*** Bumping version in $PACKAGE_JSON to $VERSION"
  cd $PTNFLY_DIR

  sed "s|\"version\":.*|\"version\": \"$VERSION\",|" $PACKAGE_JSON > $PACKAGE_JSON.tmp
  check $? "Version bump failure"

  mv $PACKAGE_JSON.tmp $PACKAGE_JSON
}

# Clean dependencies
#
clean()
{
  echo "*** Cleaning dependencies"
  cd $PTNFLY_DIR

  if [ -z "$TRAVIS" ]; then
    # Clean npm and bower installs (non-Travis build)
    npm cache clean
    bower cache clean

    # Remove for repo rebuild
    if [ -d node_modules ]; then
      rm -rf node_modules
    fi
    if [ -d components ]; then
      rm -rf components
    fi
  fi

  # shrinkwrap
  if [ -s $SHRINKWRAP_JSON ]; then
    rm -f $SHRINKWRAP_JSON
  fi
}

# Commit changes prior to bower verify step
#
commit()
{
  echo "*** Committing changes"
  cd $PTNFLY_DIR

  git add -u
  git commit -m "Bumped version number to $VERSION"
}

# Test prerequisites
#
prereqs()
{
  JUNK=`which npm`
  check $? "Cannot find npm in path"

  JUNK=`which bower`
  check $? "Cannot find bower in path"

  JUNK=`which grunt`
  check $? "Cannot find grunt in path"

  # Test for jekyll (non-Travis build)
  if [ -z "$TRAVIS" ]; then
    JUNK=`which jekyll`
    check $? "Cannot find jekyll in path"
  fi
}

# Publish to npm
#
publish_npm()
{
  echo "*** Publishing npm"
  cd $PTNFLY_DIR

  npm publish
  check $? "npm publish failure"
}

# Push changes to remote repo (non-Travis build)
#
push()
{
  if [ -n "$TRAVIS" ]; then
    return
  fi

  echo "*** Pushing changes to $PTNFLY_REPO_SLUG"
  cd $PTNFLY_DIR

  git push --set-upstream origin $BRANCH --force
  check $? "git push failure"

  echo "*** Changes pushed to the $BRANCH branch of $PTNFLY_REPO_SLUG"
  echo "*** Review changes and create a PR via GitHub"
}

# Setup local repo (non-Travis build)
#
setup_repo() {
  if [ -n "$TRAVIS" ]; then
    return
  fi

  echo "*** Setting up local repo $PTNFLY_DIR"
  rm -rf $PTNFLY_DIR

  mkdir -p $TMP_DIR
  cd $TMP_DIR

  git clone https://github.com/$PTNFLY_REPO_SLUG.git
  check $? "git clone failure"

  cd $PTNFLY_DIR
  git checkout $BRANCH
  if [ "$?" -ne 0 ]; then
    git checkout -B $BRANCH
  fi
  check $? "git checkout failure"
}

# Shrink wrap npm and run vulnerability test
#
shrinkwrap()
{
  echo "*** Shrink wrapping $SHRINKWRAP_JSON"
  cd $PTNFLY_DIR

  # Don't shrinkwrap dev dependencies
  npm prune -production

  npm shrinkwrap
  check $? "npm shrinkwrap failure"

  # Restore for testing
  npm install
}

usage()
{
cat <<- EEOOFF

    This script will bump repo version numbers, build, shrinkwrap, test, install, push to GitHub, and publish to npm.

    Note: After changes are pushed, a PR will need to be created via GitHub.

    sh [-x] $SCRIPT [-h|p|f|s] -v <version>

    Example: sh $SCRIPT -v 3.15.0 -f

    OPTIONS:
    h       Display this message (default) 
    f       Force push new branch to GitHub (e.g., bump-v3.15.0)
    p       Publish to npm (not valid with -s or -v)
    s       Skip new clone, clean, and install to rebuild previously created repo
    v       The version number (e.g., 3.15.0)

EEOOFF
}

# Verify npm and bower installs prior to publish step
#
verify()
{
  echo "*** Verifying install"
  rm -rf $VERIFY_DIR

  mkdir -p $VERIFY_DIR
  cd $VERIFY_DIR

  npm install $PTNFLY_DIR
  check $? "npm install failure"

  bower install $PTNFLY_DIR/bower.json
  check $? "bower install failure"
}

# main()
{
  default

  if [ "$#" -eq 0 ]; then
    usage
    exit 1
  fi

  while getopts hfpsv c; do
    case $c in
      h) usage; exit 0;;
      f) PUSH=1;;
      p) PUBLISH=1
         BRANCH=master;;
      s) SKIP_SETUP=1;;
      v) VERSION=$2; shift
         BRANCH=bump-v$VERSION;;
      \?) usage; exit 1;;
    esac
  done

  if [ -z "$VERSION" -a -z "$PUBLISH" -o -n "$VERSION" -a -n "$PUBLISH" ]; then
    usage
    exit 1
  fi

  prereqs

  if [ -z "$PUBLISH" ]; then
    if [ -z "$SKIP_SETUP" ]; then
      setup_repo
    fi

    bump_bower
    bump_package

    if [ -z "$SKIP_SETUP" ]; then
      clean
      build_install
    fi

    build
    shrinkwrap
    build_test
    commit
    verify

    # Push changes to remote branch
    if [ -n "$PUSH" ]; then
      push
    fi
    if [ -z "$TRAVIS" ]; then
      echo "*** Run $SCRIPT -p to publish npm after PR has been merged"
    fi
  else
    # Publish from the latest repo clone -- don't skip setup step
    setup_repo
    publish_npm
  fi

  if [ -z "$TRAVIS" ]; then
    echo "*** Remove $TMP_DIR directory manually after testing"
  fi
}
