#!/bin/sh

default()
{
  PATH=/bin:/usr/bin:/usr/local/bin:$PATH
  export PATH

  SCRIPT=`basename $0`
  SCRIPT_DIR=`dirname $0`
  SCRIPT_DIR=`cd $SCRIPT_DIR; pwd`

  . $SCRIPT_DIR/env.sh
  . $SCRIPT_DIR/common.sh

  TMP_DIR="/tmp/$SCRIPT.$$"
  PTNFLY_DIR="$TMP_DIR/patternfly"
}

# Add tag to kick off version bump
#
add_bump_tag()
{
  echo "*** Adding version bump tag"
  cd $PTNFLY_DIR

  git tag $BUMP_TAG_PREFIX$VERSION
  check $? "git tag failure"

  git push origin tag $BUMP_TAG_PREFIX$VERSION
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

  git checkout master
  check $? "git checkout failure"
}

usage()
{
cat <<- EEOOFF

    This script will release the repo by creating a custom Git tag. Travis will run the appropriate scripts to
    automatically bump version numbers, build, shrinkwrap, test, install, and publish the release.

    When the release is complete, the custom Git tag is removed from GitHub. The custom tag is created using a clone so
    it won't persist in your local repo.

    If the release is successful, RCUE, Angular Patternfly, and Patternfly Org will be released as well. This is done
    by creating a Git tag for the next repo to be built.

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

  setup_repo
  add_bump_tag
  rm -rf $TMP_DIR

  echo "*** Travis build history: https://travis-ci.org/$PTNFLY_REPO_SLUG/builds"
}
