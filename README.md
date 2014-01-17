# [PatternFly](http://site-patternfly.rhcloud.com/) reference implementation

This reference implementation of PatternFly is based on [Bootstrap v3](http://getbootstrap.com/).  Think of PatternFly as a "skinned" version of Bootstrap with additional components and customizations.

## Dependencies

PatternFly includes a number of dependencies that are not committed to this repository.  To add them, see "Install Bower Components".

## Development

Development setup requires nodejs. If you do not already have nodejs and npm installed on your system, please see https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager for how to install on your distribution.

### Install Bower Components

After ensuring nodejs and npm are available, install [Bower](http://bower.io/) globally:

    npm install -g bower

Now that Bower is available, we can install the required development components:

    bower install

At this point, you should now have a top level components/ folder with all dependencies listed in the bower.json file installed.

### Install Development Dependencies

The development includes the use of a number of helpful tasks. In order to setup your development environment to allow running of these tasks, you need to install the local nodejs packages declared in `package.json`. To do this run:

    npm install

This will install all necessary development packages into `node_modules/`. At this point, the gruntjs tasks are available for use such as starting a local development server or building the master CSS file.

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

This task will compile and minify the lesscss files into a single CSS file located at `dist/css/global.min.css`.

### PatternFlyIcons Font

PatternFlyIcons font is generated using [IcoMoon](http://icomoon.io/app).  [Load](http://icomoon.io/#docs/save-load) `PatternFlyIcons-webfont.json` as a new project in IcoMoon and update as necessary.  Please commit the updated `PatternFlyIcons-webfont.json` file in addition to the updated font files and supporting LESS/CSS changes.

## Tests

The `tests/` directory contains HTML pages with component and pattern examples in order to facilitate development.  Please consult the official documentation (see below) for full details on how to use PatternFly.

## Documentation

See [http://site-patternfly.rhcloud.com/](http://site-patternfly.rhcloud.com/) and [http://getbootstrap.com/](http://getbootstrap.com/).

## License

Modifications to Bootstrap are copyright 2013 Red Hat, Inc. and licensed under the [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0.html).
