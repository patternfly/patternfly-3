#!/bin/sh

default()
{
  SCRIPT=`basename $0`
  SCRIPT_DIR=`dirname $0`
  SCRIPT_DIR=`cd $SCRIPT_DIR; pwd`

  PTNFLY_DIR=$SCRIPT_DIR/..

  GIT_USER_NAME=patternfly-build
  GIT_USER_EMAIL=patternfly-build@redhat.com

  # Ensures only main repo is released
  PTNFLY_REPO_SLUG=dlabrecq/patternfly
  ANGULAR_PTNFLY_REPO_SLUG=dlabrecq/angular-patternfly

  # Tag prefix used to kick off version bump
  TAG_PREFIX=_bump-v
}

# Build repo and test
#
build()
{
  echo "*** Building `pwd`"
  cd $PTNFLY_DIR

  grunt build
  check $? "grunt build failure"

  node node_modules/nsp/bin/nsp --shrinkwrap npm-shrinkwrap.json check --output summary
  check $? "shrinkwrap vulnerability failure"

  npm test
  check $? "npm test failure"
}

# Check errors
#
# $1: Exit status
# $2: Error message
check()
{
  if [ "$1" != 0 ]; then
    echo "*** Error: $2"
    exit $1
  fi
}

# Setup env for use with GitHub
#
git_setup()
{
  echo "*** Setting up Git"
  cd $PTNFLY_DIR

  git config user.name $GIT_USER_NAME
  git config user.email $GIT_USER_EMAIL
  git config --global push.default simple

  # Add upstream as a remote
  git remote add upstream https://$AUTH_TOKEN@github.com/$TRAVIS_REPO_SLUG.git

  # Add angular-patternfly as a remote
  git remote add apf https://$AUTH_TOKEN@github.com/$ANGULAR_PTNFLY_REPO_SLUG.git

  # Reconcile detached HEAD -- name must not be ambiguous with tags
  git checkout -B $TRAVIS_BRANCH-local
  check $? "git checkout failure"
}

# Install dependencies
#
install()
{
  echo "*** Intsalling dependencies"
  cd $PTNFLY_DIR

  bundle install
  check $? "bundle install failure"
}

usage()
{
cat <<- EEOOFF

    This script will build, publish, and release Patternfly.

    Note: Intended for use with Travis only.

    sh [-x] $SCRIPT [-h]

    Example: sh $SCRIPT

    OPTIONS:
    h       Display this message (default)

EEOOFF
}

# main()
{
  default
  git_setup

  while getopts h c; do
    case $c in
      h) usage; exit 0;;
      \?) usage; exit 1;;
    esac
  done

  echo "This build is running against $TRAVIS_REPO_SLUG"

  if [ -n "$TRAVIS_TAG" ]; then
    echo "This build is running against $TRAVIS_TAG"

    # Get version from tag
    case "$TRAVIS_TAG" in
      $TAG_PREFIX* ) VERSION=`echo "$TRAVIS_TAG" | cut -c 8-`;;
      *) SKIP_PUBLISH=1; echo "$TRAVIS_TAG is not a recognized format. Do not release!";;
    esac
  fi

  # Ensure release runs with Patternfly tags only
  if [ "$TRAVIS_REPO_SLUG" = "$PTNFLY_REPO_SLUG" -a -n "$VERSION" ]; then
    # Note: This script must remove the shrinkwrap prior to install so we may build new
    sh -x $SCRIPT_DIR/release.sh -v $VERSION
    check $? "bump version failure"
  else
    install
    build
  fi

  if [ -z "$SKIP_PUBLISH" ]; then
    sh -x $SCRIPT_DIR/publish.sh
    check $? "GitHub publish failure"
  fi
}
