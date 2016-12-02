#!/bin/sh

default()
{
  SCRIPT=`basename $0`
  SCRIPT_DIR=`dirname $0`
  SCRIPT_DIR=`cd $SCRIPT_DIR; pwd`

  . $SCRIPT_DIR/release/env.sh
  . $SCRIPT_DIR/release/common.sh

  PTNFLY_DIR=`cd $SCRIPT_DIR/..; pwd`
}

# Publish to dist branch
#
publish()
{
  echo "*** Publishing"
  cd $PTNFLY_DIR

  sh -x $SCRIPT_DIR/publish.sh
  check $? "Publish failure"
}

usage()
{
cat <<- EEOOFF

    This script will build, publish, and release the repo.

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

  while getopts h c; do
    case $c in
      h) usage; exit 0;;
      \?) usage; exit 1;;
    esac
  done

  echo "This build is running against $TRAVIS_REPO_SLUG"

  if [ -qn "$TRAVIS_TAG" ]; then
    echo "This build is running against $TRAVIS_TAG"

    # Get version from tag
    case "$TRAVIS_TAG" in
      $BUMP_TAG_PREFIX* ) RELEASE=1;;
      *) echo "$TRAVIS_TAG is not a recognized format. Do not release!";;
    esac
  fi

  if [ -n "$RELEASE" ]; then
    sh -x $SCRIPT_DIR/release/build.sh
    check $? "Release failure"
  else
    git_setup
    build_install
    build
    build_test

    # Skip publish for pull requests
    if [ "$TRAVIS_PULL_REQUEST" = "false" ]; then
      publish
    fi
  fi
}
