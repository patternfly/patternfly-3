# Patternfly Release Process

At periodic intervals PatternFly, and all repos which utilize PF, must be versioned. Below is a summary of all the steps involved. For more information on each repo, please see [PatternFly Documentation](https://depot-uxd.itos.redhat.com/uxd-team/uxd-dev-team/#docs).

Note that many of the release steps have been automated by scripts, named release.sh and release-all.sh. Where applicable to each repo, these scripts will clone a new repo from GitHub, bump the npm/bower version and website home page version numbers. The scripts will also clean the npm/bower cache, run npm install, bower install, grunt build, grunt ngdocs:publish, npm shrinkwrap, npm publish, npm test, nsp shrinkwrap audit, and will verify npm/bower installs.

### release.sh

This script will bump version numbers, build, shrinkwrap, test, install, push to GitHub, and publish to npm. These changes are added to a branch that must be merged with a PR on GitHub.

Although many release steps have been automated, this is a manual release process. Creating a PR, release notes, and community email are still tasks which must be performed manually.

This is useful when debugging build issues or publishing individual releases. In fact, release-all.sh uses this script to automate the release process.

1. Choose version using [semantic versioning](https://docs.npmjs.com/getting-started/semantic-versioning) ([details](https://github.com/patternfly/patternfly/blob/master/README.md#release))
2. Bump the version number, build, etc.
 - Run sh ./scripts/release/release.sh -v <version> -f
3. Review test pages, verify latest changes
 - cd /tmp/patternfly-releases/patternfly
 - Run grunt server
4. PR reviewed & merged (no dist files should be checked in)
5. NPM Publish
 - Create an NPM account and become a collaborator for https://www.npmjs.com/package/patternfly
 - Run sh ./scripts/release/release.sh -p
6. Release Notes Published (via GitHub)
 - Tag “master-dist” branch commit with updated version
7. Community email sent (patternfly@redhat.com)

### release-all.sh

This script is used to automate and chain releases together. When the Patternfly release is complete, the release processes for Angular Patternfly and RCUE are kicked off. When the Angular Patternfly release is complete, Patternfly Org will be released as well.

The script kicks off the release by creating a custom Git tag. When Travis sees this custom tag, it will run the appropriate scripts to automatically bump version numbers, build, shrinkwrap, test, install, and publish the release. 

Although there is no PR to deal with here, creating release notes is still a task which must be performed manually via GitHub.

Note: Builds can only be stopped via the Travis CI.

1. Choose version using [semantic versioning](https://docs.npmjs.com/getting-started/semantic-versioning) ([details](https://github.com/patternfly/patternfly/blob/master/README.md#release))
2. Run sh ./scripts/release/release-all.sh -v <version>
3. Release Notes Published (via GitHub)
 - Tag “master-dist” branch commit with updated version
4. Run sh ./scripts/release/notify.sh -v <version>
