#!/bin/sh

# Build repo
#
build()
{
  echo "*** Building `pwd`"
  cd $PTNFLY_DIR

  grunt build
  check $? "Build failure"
}

# Install build dependencies
#
build_install()
{
  echo "*** Intsalling build dependencies"
  cd $PTNFLY_DIR

  if [ -n "$TRAVIS" ]; then
    bundle install
    check $? "bundle install failure"
  else
    npm install
    check $? "npm install failure"

    bower install
    check $? "bower install failure"
  fi
}

# Test build
build_test()
{
  echo "*** Testing build"
  cd $PTNFLY_DIR

  npm test
  check $? "npm test failure"

  node node_modules/nsp/bin/nsp --shrinkwrap npm-shrinkwrap.json check --output summary
  check $? "shrinkwrap vulnerability found" warn
}

# Check errors
#
# $1: Exit status
# $2: Error message
# $3: Show warning
check()
{
  if [ "$1" != 0 ]; then
    if [ "$3" = "warn" ]; then
      echo "*** Warning: $2"
    else
      echo "*** Error: $2"
      exit $1
    fi
  fi
}

# Setup env for use with GitHub
#
git_setup()
{
  echo "*** Setting up Git env"
  cd $PTNFLY_DIR

  git config user.name $GIT_USER_NAME
  git config user.email $GIT_USER_EMAIL
  git config --global push.default simple

  # Add upstream as a remote
  git remote rm upstream
  git remote add upstream https://$AUTH_TOKEN@github.com/$TRAVIS_REPO_SLUG.git
  check $? "git add remote failure"

  # Add Angular Patternfly as a remote
  git remote rm apf
  git remote add apf https://$AUTH_TOKEN@github.com/$APF_REPO_SLUG.git
  check $? "git add remote failure"

  # Add RCUE as the next remote
  git remote rm rcue
  git remote add rcue https://$AUTH_TOKEN@github.com/$RCUE_REPO_SLUG.git
  check $? "git add remote failure"

  # Reconcile detached HEAD -- name must not be ambiguous with tags
  git checkout -B $TRAVIS_BRANCH-local
  check $? "git checkout failure"

  # Fetch to test if tag exists
  git fetch --tags
  check $? "Fetch tags failure"
}
