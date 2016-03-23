# [PatternFly](https://www.patternfly.org) reference implementation

This reference implementation of PatternFly is based on [Bootstrap v3](http://getbootstrap.com/).  Think of PatternFly as a "skinned" version of Bootstrap with additional components and customizations. For information on how to quickly get started using PatternFly, see the [Quick Start Guide](QUICKSTART.md).


# Installation

### Install with Bower

PatternFly can be installed and managed through [Bower](http://bower.io/). To do so, either add `patternfly` as a dependency in your `bower.json` or run the following:

```
bower install patternfly
```

#### Using Wiredep?

Are you using [Wiredep](https://github.com/taptapship/wiredep)?  PatternFly's CSS includes the CSS of its dependencies.  As a result, you'll want to add the following to your [Wiredep configuration](https://github.com/taptapship/wiredep#configuration) so you don't end up with duplicate CSS.

```
exclude: [
  "bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.css",
  "bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker3.css",
  "bower_components/bootstrap-select/dist/css/bootstrap-select.css",
  "bower_components/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.css",
  "bower_components/bootstrap-treeview/dist/bootstrap-treeview.min.css",
  "bower_components/c3/c3.css",
  "bower_components/datatables/media/css/jquery.dataTables.css",
  "bower_components/datatables-colreorder/css/dataTables.colReorder.css",
  "bower_components/datatables-colvis/css/dataTables.colVis.css",
  "bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css",
  "bower_components/font-awesome/css/font-awesome.css",
  "bower_components/google-code-prettify/bin/prettify.min.css"
],
```

### Install with npm

PatternFly can be installed and managed through [npm](https://www.npmjs.com/).  To do so, run the following:

```
npm install patternfly
```

### Sass and/or Rails

A [Sass port of PatternFly](https://github.com/patternfly/patternfly-sass) is available, as is a [Sass-based Rails Gem](https://rubygems.org/gems/patternfly-sass).

### AngularJS

A set of [common AngularJS directives](https://github.com/patternfly/angular-patternfly) for use with PatternFly is available.

## Dependencies

PatternFly includes a number of dependencies that are not committed to this repository.  To add them, see "Install Bower Components".  And make sure you keep them updated (see "Keeping Bower Components Updated").

## Development

Development setup requires nodejs and Ruby. If you do not already have nodejs, npm, and Ruby installed on your system, see https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager and https://www.ruby-lang.org/en/downloads.

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

Test pages are generated using [Jekyll](http://jekyllrb.com/).  After ensuring Ruby is installed and available, run:

    gem install jekyll -v 2.5.3

Note: You can use any version prior to 3.1.x, due to [#4433](https://github.com/jekyll/jekyll/issues/4433) and [#4442](https://github.com/jekyll/jekyll/issues/4442)

### Live Reload Server

A local development server can be quickly fired up by using the Gruntjs server task:

    grunt server

This local static asset server (i.e., [http://localhost:9000](http://localhost:9000)) has the advantage of having livereload integration. Thus, if you start the Gruntjs server, any changes you make to `.html` or `.less` files will be automatically reloaded into your browser and the changes reflected almost immediately. This has the obvious benefit of not having to refresh your browser and still be able to see the changes as you add or remove them from your development files.  Additionally, any changes made to Jekyll source files (`tests-src/`) will trigger a Jekyll build.

### Coding Style

See [http://codeguide.patternfly.org/](http://codeguide.patternfly.org/).

## Build

### CSS

In development, styling is written and managed through multiple lesscss files. In order to generate a CSS file of all styling, run the build Gruntjs task:

    grunt build

This task will compile and minify the lesscss files into CSS files located at `dist/css/patternfly.min.css` and `dist/css/patternfly-additional.min.css`.

### PatternFlyIcons Font

PatternFlyIcons font is generated using [IcoMoon](http://icomoon.io/app). Go to [manage projects](https://icomoon.io/app/#/projects) and import the project `PatternFlyIcons-webfont.json`. Load it and update as necessary. When finished, return to manage projects, and download the updated `PatternFlyIcons-webfont.json` file. Also generate the fonts. Please commit the updated `PatternFlyIcons-webfont.json` file, the updated font files and supporting LESS/CSS changes.

## Tests

The `tests/` directory contains HTML pages with component and pattern examples in order to facilitate development.  Please consult the official documentation (see below) for full details on how to use PatternFly.

The HTML pages in `tests/` are generated using Jekyll.  Do *not* edit these files directly.  See `tests-src/` to change these files.

## Release

PatternFly is released through the Bower and npm.

To release a new version version of PatternFly, edit `bower.json` and `package.json` accordingly.

Update the version listed in `bower.json` by editing the file and changing the line:

```
"version": "<new_version>"
```

Update the version listed in `package.json` by editing the file and changing the line:

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

The Bower package manager determines available versions and installs based upon git tags, so the new version will now be automatically available via Bower.

To publish a new version to npm, run:

```
npm publish
```

## Documentation

See [https://www.patternfly.org](https://www.patternfly.org) and [http://getbootstrap.com/](http://getbootstrap.com/).

### Browser and Device Support

Since PatternFly is based on Bootstrap, PatternFly supports [the same browsers as Bootstrap](http://getbootstrap.com/getting-started/#support) **excluding Internet Explorer 8**, plus the latest version of [Firefox for Linux](https://support.mozilla.org/en-US/kb/install-firefox-linux).

*Important:*  starting with the v2.0.0 release, **PatternFly no longer supports Internet Explorer 8**.

### Product Backlog

See [https://patternfly.atlassian.net/secure/RapidBoard.jspa?projectKey=PTNFLY&rapidView=4&view=planning](https://patternfly.atlassian.net/secure/RapidBoard.jspa?projectKey=PTNFLY&rapidView=4&view=planning).

### Bug List

Official tracking of bugs occurs in Jira.  See https://patternfly.atlassian.net/issues/?filter=10300

## License

Modifications to Bootstrap are copyright 2013 Red Hat, Inc. and licensed under the [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0.html).
