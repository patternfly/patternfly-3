#!/bin/sh

default()
{
  SCRIPT=`basename $0`
  SCRIPT_DIR=`dirname $0`
  SCRIPT_DIR=`cd $SCRIPT_DIR; pwd`

  EMAIL_LIST=dlabrecq@redhat.com

  REPO_SLUG=patternfly/patternfly

  TMP_DIR=/tmp/$SCRIPT.$$
  TMP_FILE=release.txt

  TAG_PREFIX=v
}

# Check for errors
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

# Send email notifying users a new release is available
#
email()
{
  echo "*** Email notice"
  mkdir -p $TMP_DIR

cat > $TMP_DIR/$TMP_FILE <<- EEOOFF
The UXD team is proud to announce the $VERSION release of PatternFly. This release includes the following changes.

$RELEASE_NOTES

Check out the PatternfFly $VERSION Release Notes for more details:
https://github.com/patternfly/patternfly/releases/tag/$TAG

Thanks to everyone who participated in this release (both directly and indirectly) - your contributions are what keeps pushing PatternFly forward!

- the PatternFly team
EEOOFF

  SUBJECT="The Patternfly $VERSION release is now available"
  cat $TMP_DIR/$TMP_FILE | mail -s "$SUBJECT" "$EMAIL_LIST"
  rm -rf $TMP_DIR
}

# Fetch release notes from GitHub release
#
fetch_notes()
{
  echo "*** Fetch notes"

  RELEASE_NOTES=`curl -s https://api.github.com/repos/$REPO_SLUG/releases/tags/$TAG |
         node -pe "JSON.parse(require('fs').readFileSync('/dev/stdin').toString()).body"`
  check $? "fetch notes failure"

  if [ "$RELEASE_NOTES" = "undefined" ]; then
    check 1 "notes undefined failure"
  fi
}

usage()
{
cat <<- EEOOFF
    This script will send a release notice to the Patternfly mailling list.

    Note: You must configure your system to tell it where to send email. If you haven't done so, see:
    http://codana.me/2014/11/23/sending-gmail-from-os-x-yosemite-terminal

    sh [-x] $SCRIPT [-h]

    Example: sh $SCRIPT -t v3.15.0

    OPTIONS:
    h       Display this message (default)
    t       The release tag (e.g., v3.15.0)

EEOOFF
}

# main()
{
  default

  if [ "$#" -eq 0 ]; then
    usage
    exit 1
  fi

  while getopts ht c; do
    case $c in
      h) usage; exit 0;;
      t) TAG=$2; shift;;
      \?) usage; exit 1;;
    esac
  done

  # Get version from tag
  case "$TAG" in
    $TAG_PREFIX* ) VERSION=`echo "$TAG" | cut -c 2-`;;
    *) echo "$TAG is not a recognized format. Do not email notice!"; exit 1;;
  esac

  fetch_notes
  email
}
