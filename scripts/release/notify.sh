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

  TMP_DIR=/tmp/$SCRIPT.$$
  TMP_FILE=notify.txt
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
https://github.com/$PTNFLY_REPO_SLUG/releases/tag/$RELEASE_TAG_PREFIX$VERSION

Thanks to everyone who participated in this release (both directly and indirectly) - your contributions are what keeps pushing PatternFly forward!

- the PatternFly team
EEOOFF

  SUBJECT="The Patternfly $VERSION release is now available"
  cat $TMP_DIR/$TMP_FILE | mail -s "$SUBJECT" "$NOTIFY_EMAIL"
  rm -rf $TMP_DIR
}

# Fetch release notes from GitHub release
#
fetch_notes()
{
  echo "*** Fetch notes"

  RELEASE_NOTES=`curl -s https://api.github.com/repos/$PTNFLY_REPO_SLUG/releases/tags/$RELEASE_TAG_PREFIX$VERSION |
                 node -pe "JSON.parse(require('fs').readFileSync('/dev/stdin').toString()).body"`
  check $? "fetch notes failure"

  if [ "$RELEASE_NOTES" = "undefined" ]; then
    check 1 "Could not retrieve release notes.\nEnsure release has been published via GitHub."
  fi
}

usage()
{
cat <<- EEOOFF
    This script will send a release notice to the Patternfly mailling list.

    Note: You must configure your system to tell it where to send email. If you haven't done so, see:
    http://codana.me/2014/11/23/sending-gmail-from-os-x-yosemite-terminal

    sh [-x] $SCRIPT [-h|v]

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

  while getopts hv c; do
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

  fetch_notes
  email
}
