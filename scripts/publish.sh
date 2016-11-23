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

# Push generated files to dist branch
#
push_dist()
{
  echo "*** Pushing to $TRAVIS_BRANCH-dist"
  cd $PTNFLY_DIR

  # Commit generated files
  git add dist --force
  git commit -m "Added files generated by Travis build"
  check $? "git commit failure"

  # Push to dist branch
  EXISTING=`git ls-remote --heads https://github.com/$TRAVIS_REPO_SLUG.git $TRAVIS_BRANCH-dist`

  if [ -n "$EXISTING" ]; then
    git fetch upstream $TRAVIS_BRANCH-dist:$TRAVIS_BRANCH-dist # <remote-branch>:<local-branch>
    git checkout $TRAVIS_BRANCH-dist
    git merge -Xtheirs $TRAVIS_BRANCH-local --no-edit --ff
    check $? "git merge failure"

    git push upstream $TRAVIS_BRANCH-dist --force -v
  else
    git push upstream $TRAVIS_BRANCH-local:$TRAVIS_BRANCH-dist --force -v
  fi
  check $? "git push failure"
}

usage()
{
cat <<- EEOOFF

    This script will publish generated files to GitHub.

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

  # Avoid creating a dist equivalent for all branches in the main repo
  if [ "$TRAVIS_REPO_SLUG" = "$PTNFLY_REPO_SLUG" -a "$TRAVIS_BRANCH" != "master" ]; then
    echo "This commit was made against $TRAVIS_BRANCH and not the master or tag! Do not deploy!"
    exit 0
  fi

  # Ensure dist branch is not redeployed.
  case "$TRAVIS_BRANCH" in
    *-dist ) echo "This commit was made against the dist branch. Do not deploy!"; exit 0;;
  esac

  git_setup
  push_dist
}
