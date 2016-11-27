#!/bin/sh

default()
{
  PATH=/bin:/usr/bin:/usr/local/bin:$PATH
  export PATH

  SCRIPT=`basename $0`
  SCRIPT_DIR=`dirname $0`
  SCRIPT_DIR=`cd $SCRIPT_DIR; pwd`

  TMP_DIR="/tmp/$SCRIPT.$$"
  PTNFLY_DIR="$TMP_DIR/patternfly"

  # Ensures only main repo is released
  PTNFLY_REPO_SLUG=dlabrecq/patternfly

  # Tag prefix used to kick off version bump
  TAG_PREFIX=_bump-v
  BRANCH=master
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

# Add tag to kick off version bump
#
add_bump_tag()
{
  echo "*** Adding version bump tag"
  cd $PTNFLY_DIR

  git tag $TAG_PREFIX$VERSION
  check $? "git tag failure"

  git push origin $TAG_PREFIX$VERSION
  check $? "git push failure"
}

# Setup local repo
#
setup_repo() {
  echo "*** Setting up local repo $PTNFLY_DIR"
  mkdir -p $TMP_DIR
  cd $TMP_DIR

  git clone https://github.com/$PTNFLY_REPO_SLUG.git
  check $? "git clone failure"
  cd $PTNFLY_DIR

  git checkout $BRANCH
  check $? "git checkout failure"
}

usage()
{
cat <<- EEOOFF

    This script will release Patternfly by adding a custom tag to the GitHub repo. Travis will automatically bump
    the version number, build, test, and publish the release.

    When the release is complete, the custom tag is removed from GitHub. The custom tag is created using a clone so it
    won't persist in your local repo.

    If the release is successful, RCUE, Angular Patternfly, and Patternfly.org will be released as well.

    If 3.15.0 is provided as a version number; for example, the release will be tagged as v3.15.0.

    Release notes must be added via GitHub.

    Note: Builds can only be stopped via the Travis UI: https://travis-ci.org/$PTNFLY_REPO_SLUG/builds

    sh [-x] $SCRIPT [-h] -v <version>

    Example: sh $SCRIPT -v 3.15.0

    OPTIONS:
    h       Display this message (default)
    v       The version number (e.g., 3.15.0)

EEOOFF
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
      v) VERSION=$2; shift;;
      \?) usage; exit 1;;
    esac
  done

  if [ -z "$VERSION" ]; then
    usage
    exit 1
  fi

  add_bump_tag
  setup_repo
  rm -rf $TMP_DIR

  echo "*** Travis build history: https://travis-ci.org/$PTNFLY_REPO_SLUG/builds"
}
