#!/bin/sh

default()
{
  SCRIPT=`basename $0`
  SCRIPT_DIR=`dirname $0`
  SCRIPT_DIR=`cd $SCRIPT_DIR; pwd`

  . $SCRIPT_DIR/env.sh
  . $SCRIPT_DIR/common.sh

  PTNFLY_DIR=`cd $SCRIPT_DIR/../..; pwd`
}

# Add tag to kick off Angular Patternfly version bump
#
add_apf_tag()
{
  echo "*** Adding Angular Patternfly tag"
  cd $PTNFLY_DIR

  # Add tag to kick off version bump
  git fetch apf master:master-apf # <remote-branch>:<local-branch>
  git checkout master-apf
  git tag $BUMP_TAG_PREFIX$VERSION -f
  git push apf tag $BUMP_TAG_PREFIX$VERSION
  check $? "add apf tag failure"
}

# Add tag to kick off RCUE version bump
#
add_rcue_tag()
{
  echo "*** Adding RCUE tag"
  cd $PTNFLY_DIR

  # Add tag to kick off version bump
  git fetch rcue master:master-rcue # <remote-branch>:<local-branch>
  git checkout master-rcue
  git tag $BUMP_TAG_PREFIX$VERSION -f
  git push rcue tag $BUMP_TAG_PREFIX$VERSION
  check $? "add rcue tag failure"
}

# Add release tag
#
add_release_tag()
{
  echo "*** Adding release tag"
  cd $PTNFLY_DIR

  # Add release tag
  git tag $RELEASE_TAG_PREFIX$VERSION
  check $? "add tag failure"
  git push upstream tag $RELEASE_TAG_PREFIX$VERSION
  check $? "git push tag failure"
}

# Delete tag used to kick off version bump
#
delete_bump_tag()
{
  echo "*** Deleting bump tag"
  cd $PTNFLY_DIR

  # Remove bump tag
  git tag -d $BUMP_TAG_PREFIX$VERSION
  git push upstream :refs/tags/$BUMP_TAG_PREFIX$VERSION
  check $? "delete tag failure"
}

usage()
{
cat <<- EEOOFF

    This script will build, publish, and release the repo.

    If a custom Git tag has been created to publish a release, the Git tag will first be deleted, version numbers will
    be bumped, and the repo published.

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

  if [ -n "$TRAVIS_TAG" ]; then
    echo "This build is running against $TRAVIS_TAG"

    # Get version from tag
    case "$TRAVIS_TAG" in
      $BUMP_TAG_PREFIX* ) VERSION=`echo "$TRAVIS_TAG" | cut -c $BUMP_TAG_PREFIX_COUNT-`;;
      *) check 1 "$TRAVIS_TAG is not a recognized format. Do not release!";;
    esac
  fi

  # Ensure release runs for main repo only
  if [ "$TRAVIS_REPO_SLUG" != "$PTNFLY_REPO_SLUG" ]; then
    check 1 echo "Release must be performed on $PTNFLY_REPO_SLUG only!"
  fi

  git_setup
  delete_bump_tag

  git tag | grep "^$RELEASE_TAG_PREFIX$VERSION"
  if [ $? -eq 0 ]; then
    check 1 "Tag $RELEASE_TAG_PREFIX$VERSION exists. Do not release!"
  fi

  # Note: This script must remove the shrinkwrap prior to install so we may build new
  sh -x $SCRIPT_DIR/release.sh -v $VERSION
  check $? "bump version failure"

  sh -x $SCRIPT_DIR/publish.sh
  check $? "Publish failure"


  add_release_tag # Add release tag
  add_apf_tag # Kick off apf version bump
  add_rcue_tag # Kick off rcue version bump
}
