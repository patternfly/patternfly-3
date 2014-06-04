# [PatternFly](https://www.patternfly.org) reference implementation

This reference implementation of PatternFly is based on [Bootstrap v3](http://getbootstrap.com/).  Think of PatternFly as a "skinned" version of Bootstrap with additional components and customizations.

## Install with Bower

PatternFly can be installed and managed through [Bower](http://bower.io/). To do so, copy [`.bowerrc`](https://github.com/patternfly/patternfly/blob/master/.bowerrc) to your working directory [1] and either add `patternfly` as a dependency in your `bower.json` or run the following:

```
bower install patternfly
```

[1] In order to maintain the correct pathing to assets such as fonts within PatternFly as PatternFly utilizes a [custom install directory](http://bower.io/#custom-install-directory).

## Dependencies

PatternFly includes a number of dependencies that are not committed to this repository.  To add them, see "Install Bower Components".  And make sure you keep them updated (see "Keeping Bower Components Updated").

## Development

Development setup requires nodejs. If you do not already have nodejs and npm installed on your system, please see https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager for how to install on your distribution.

### Install Bower Components

After ensuring nodejs and npm are available, install [Bower](http://bower.io/) globally:

    npm install -g bower

Now that Bower is available, we can install the required development components:

    bower install

At this point, you should now have a top level components/ folder with all dependencies listed in the bower.json file installed.  Unless you plan to contribute to PatternFly itself, you're done.  Celebrate by working on integrating PatternFly and its dependencies in your app!

#### Keeping Bower Components Updated

Anytime you pull a new version of PatternFly, make sure you also run

    bower update

so you get the latest version of the components specified in bower.json.

### Install Development Dependencies

The development includes the use of a number of helpful tasks. In order to setup your development environment to allow running of these tasks, you need to install the local nodejs packages declared in `package.json`. To do this run:

    npm install

This will install all necessary development packages into `node_modules/`. At this point, the gruntjs tasks are available for use such as starting a local development server or building the master CSS file.

Additionally you may need to install the grunt command line utility.  To do this run:

    npm install -g grunt-cli

### Live Reload Server

A local development server can be quickly fired up by using the Gruntjs server task:

    grunt server

This local static asset server (i.e., [http://localhost:9000](http://localhost:9000)) has the advantage of having livereload integration. Thus, if you start the Gruntjs server, any changes you make to `.html` or `.less` files will be automatically reloaded into your browser and the changes reflected almost immediately. This has the obvious benefit of not having to refresh your browser and still be able to see the changes as you add or remove them from your development files.

### Coding Style

* Indentation
    * Use spaces (not tabs)
    * Indentation size is 2 spaces
* Filenames
    * All filenames will use a lowercase-hyphenated naming convention (e.g., single-select-dropdown.less)
* LESSCSS
    * CSS class names use lowercase-hyphenated naming convention (e.g., .navbar-nav)
    * Alphabetize rules by selector
    * Alphabetize properties by declaration
    * Define or override variables centrally in less/variables.less
    * Define or override mixins centrally in less/mixins.less

## Build

### CSS

In development, styling is written and managed through multiple lesscss files. In order to generate a CSS file of all styling, run the build Gruntjs task:

    grunt build

This task will compile and minify the lesscss files into a single CSS file located at `dist/css/patternfly.min.css`.

### PatternFlyIcons Font

PatternFlyIcons font is generated using [IcoMoon](http://icomoon.io/app).  [Load](http://icomoon.io/#docs/save-load) `PatternFlyIcons-webfont.json` as a new project in IcoMoon and update as necessary.  Please commit the updated `PatternFlyIcons-webfont.json` file in addition to the updated font files and supporting LESS/CSS changes.

## Tests

The `tests/` directory contains HTML pages with component and pattern examples in order to facilitate development.  Please consult the official documentation (see below) for full details on how to use PatternFly.

## Release

The PatternFly library is released through the Bower package manager. This package manager determines available versions and installs based upon git tags. To release a new version version of PatternFly the version listed in `bower.json` needs to be updated and the repository tagged and pushed upstream. **Note:**  also update the version number in `package.json` so it stays in sync.

Update the version listed in `bower.json` by editing the file and changing the line:

```
"version": "<new_version>"
```

Commit the version bump:

```
git commit -a -m "Version bump to <new_version>"
```

Tag and push upstream (assuming you have commit access):

```
git tag <new_version>
git push && git push --tags
```

The new version will now be automatically available via Bower.

## Documentation

See [https://www.patternfly.org](https://www.patternfly.org) and [http://getbootstrap.com/](http://getbootstrap.com/).

### Product Backlog

See [https://trello.com/b/Hz3Nmwk4/patternfly-reference-implementation](https://trello.com/b/Hz3Nmwk4/patternfly-reference-implementation).

## License

Modifications to Bootstrap are copyright 2013 Red Hat, Inc. and licensed under the [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0.html).
