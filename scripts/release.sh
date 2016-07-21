#!/bin/sh

default()
{
  PATH=/bin:/usr/bin:/usr/local/bin:${PATH}
  export PATH

  SCRIPT=`basename $0`
  SCRIPT_DIR=`dirname $0`
  SCRIPT_DIR=`cd $SCRIPT_DIR; pwd`
  TMP_DIR="/tmp/patternfly-releases"

  BOWER_JSON=bower.json
  PACKAGE_JSON=package.json
  SHRINKWRAP_JSON=npm-shrinkwrap.json

  PTNFLY_REPO=https://github.com/patternfly/patternfly.git
  PTNFLY_DIR="$TMP_DIR/patternfly"
  VERIFY_DIR="$TMP_DIR/patternfly-verify"
}

build()
{
  echo "*** Building `pwd`"
  cd $PTNFLY_DIR

  grunt build
  check $? "Build failure"
}

# Bump version in bower.json
bump_bower()
{
  echo "*** Bumping version in $BOWER_JSON to $VERSION"
  cd $PTNFLY_DIR

  sed "s|\"version\":.*|\"version\": \"$VERSION\",|" $BOWER_JSON > $BOWER_JSON.tmp
  mv $BOWER_JSON.tmp $BOWER_JSON
}

# Bump version in package.json
bump_package()
{
  echo "*** Bumping version in $PACKAGE_JSON to $VERSION"
  cd $PTNFLY_DIR

  sed "s|\"version\":.*|\"version\": \"$VERSION\",|" $PACKAGE_JSON > $PACKAGE_JSON.tmp
  mv $PACKAGE_JSON.tmp $PACKAGE_JSON
}

# Check errors
#
# $1: Exit status
# $2: Error message
check()
{
  if [ "$1" != 0 ]; then
    echo "*** Error: $2"
    exit 1
  fi
}

# Clean dependencies
clean()
{
  echo "*** Cleaning dependencies"
  cd $PTNFLY_DIR

  npm cache clean
  bower cache clean

  # Remove for repo rebuild
  if [ -d node_modules ]; then
    rm -rf node_modules
  fi
  if [ -d components ]; then
    rm -rf components
  fi
}

# Install dependencies
install()
{
  echo "*** Intsalling dependencies"
  npm install
  bower install
}

# Test prerequisites
prereqs()
{
  JUNK=`which npm`
  check $? "Cannot find npm in path"

  JUNK=`which bower`
  check $? "Cannot find bower in path"

  JUNK=`which grunt`
  check $? "Cannot find grunt in path"

  JUNK=`which jekyll`
  check $? "Cannot find jekyll in path"
}

# Publish to npm
publish()
{
  echo "*** Publishing npm"
  cd $PTNFLY_DIR

  npm publish
  check $? "npm publish failure"
}

# Push changes to remote repo
push()
{
  echo "*** Pushing changes to $PTNFLY_REPO"
  cd $PTNFLY_DIR

  git add --all
  git commit -m "Bumped version number to $VERSION"

  git push --set-upstream origin $BRANCH --force
  check $? "Push failure"
}

# Setup local repo
setup_repo() {
  echo "*** Setting up local repo $PTNFLY_DIR"
  rm -rf $PTNFLY_DIR

  mkdir -p $TMP_DIR
  cd $TMP_DIR

  git clone $PTNFLY_REPO
  cd $PTNFLY_DIR

  git checkout -B $BRANCH
  check $? "Local repo setup failure"
}

# Shrink wrap npm
shrinkwrap()
{
  echo "*** Shrink wrapping $SHRINKWRAP_JSON"
  cd $PTNFLY_DIR

  # shrinkwrap
  if [ -s $SHRINKWRAP_JSON ]; then
    rm -f $SHRINKWRAP_JSON
  fi

  npm shrinkwrap
  check $? "npm shrinkwrap failure"
}

usage()
{
cat <<- EEOOFF

    This script will bump the version number for the PatternFly repo or 
    publish the Patternfly repo on GitHub to npm.

    Note: After changes are pushed, a PR will need to be created via GitHub.

    sh [-x] $SCRIPT [-h|p|f|s] -v <version>

    Example: sh $SCRIPT -v 3.7.0 -f

    OPTIONS:
    h       Display this message (default) 
    f       Force push to new repo branch (e.g., bump-v3.7.0)
    p       Publish to npm from latest repo clone
    s       Skip repo setup (e.g., to rebuild previously created repo)
    v       The version number (e.g., 3.7.0) -- not valid with -p

EEOOFF
}

verify()
{
  echo "*** Verifying install"
  rm -rf $VERIFY_DIR

  mkdir -p $VERIFY_DIR
  cd $VERIFY_DIR

  npm install $PTNFLY_DIR
  check $? "npm install failure"

  bower install $PTNFLY_DIR
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
      s) SETUP=1;;
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

  if [ -z "$SETUP" ]; then
    setup_repo
  fi

  if [ -z "$PUBLISH" ]; then
    bump_bower
    bump_package
    clean
    install
    build
    shrinkwrap
    verify
  else
    clean
    install
    build
    publish

    # Skip remaining steps for npm publish
    exit 0
  fi

  if [ -n "$PUSH" ]; then
    push
    echo "*** Changes pushed to the $BRANCH branch of $PTNFLY_REPO"
    echo "*** Review changes and create a PR via GitHub"
  fi

  echo "*** Remove $TMP_DIR directory manually after testing"
  echo "*** Run $SCRIPT -p to publish npm after PR has been merged"
}
