# Using RCUE - Quick Start Guide

This reference implementation of RCUE is built off of [PatternFly](https://patternfly.org), which is based on [Bootstrap v3](http://getbootstrap.com/).  Think of RCUE as a "skinned" version of PatternFly. RCUE is meant to be used as a replacement for Bootstrap, so please don't include the Bootstrap CSS if you are including the RCUE CSS in your project.

### What's Included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
rcue/
└── dist/
    ├── css/
    │   │── rcue.min.css (* need to include)
    │   └── rcue-additions.min.css (* need to include)
    ├── fonts/
    │   └── font and icon libraries (included via above CSS)
    ├── img/
    │   └── branding materials and loading indicators
    ├── js/
    │   └── patternfly.min.js (may need to include if you are using PatternFly jQuery Sidebar, Popovers or Datatables)
    ├── less/
    │   └── variables, mixin, and component Less files (may need to include if you want to customize the already built CSS)
    ├── sass/
    │   └── variables, mixin, and component Sass files (may need to include if you want to customize the already built CSS)
    └── tests/
        └── example markup source files
```

We provide compiled CSS (`rcue.css`) and JS (`patternfly.js`), as well as compiled and minified CSS (`rcue.min.css`) and JS (`patternfly.min.js`). CSS [source maps](https://developer.chrome.com/devtools/docs/css-preprocessors) (`rcue.*.map`) are available for use with certain browsers' developer tools. Fonts from OpenSans, FontAwesome, PatternFly Icons are included, as well as numerous other 3rd party JS components and libraries.

## Using RCUE In Your Application

1. Ensure you have installed the following utilities:
    - [Git](http://git-scm.com/downloads): a free and open source distributed version control system.
        - Unfamiliar with Git? Try using [GitHub for Windows](https://windows.github.com/) or [GitHub for Mac](https://mac.github.com/).
    - [Node.js](http://nodejs.org/download/): a software platform that is used to build server-side applications.
    - [Grunt](http://gruntjs.com/getting-started): a JavaScript task runner.

            $ sudo npm install -g grunt-cli


2. Add RCUE as a dependency for your project and you'll receive all the libraries you'll need:

        $ npm install patternfly --save

    For full install options see the [README](README.md)

3. Add the following CSS includes to your HTML file(s), adjusting path where needed:

        <!-- RCUE Styles -->
        <!-- Note: No other CSS files are needed regardless of what other JS packages located in patternfly/components that you decide to pull in -->
        <link rel="stylesheet" href="node_modules/patternfly/dist/css/rcue.min.css">
        <link rel="stylesheet" href="node_modules/patternfly/dist/css/rcue-additions.min.css">

4. Add the following script includes to your HTML file(s), adjusting where necessary to pull in only what you need:

        <!-- jQuery -->
        <script src="node_modules/patternfly/node_modules/jquery/dist/jquery.min.js"></script>

        <!-- Bootstrap JS -->
        <script src="node_modules/patternfly/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>

        <!-- C3, D3 - Charting Libraries -->
        <script src="node_modules/patternfly/node_modules/c3/c3.min.js"></script>
        <script src="node_modules/patternfly/node_modules/d3/d3.min.js"></script>

        <!-- Datatables, jQuery Grid Component -->
        <!-- Note: jquery.dataTables.js must occur in the html source before patternfly*.js.-->
        <script src="node_modules/patternfly/node_modules/datatables/media/js/jquery.dataTables.min.js"></script>
        <script src="node_modules/patternfly/node_modules/drmonty-datatables-colvis/js/dataTables.colVis.js"></script>
        <script src="node_modules/patternfly/node_modules/datatables.net-colreorder/js/dataTables.colReorder.js"></script>

        <!-- RCUE Custom Componets -  Sidebar, Popovers and Datatables Customizations -->
        <!-- Note: jquery.dataTables.js must occur in the html source before patternfly*.js.-->
        <script src="node_modules/patternfly/node_modules/patternfly/dist/js/patternfly.min.js"></script>

        <!-- Bootstrap Combobox -->
        <script src="node_modules/patternfly/node_modules/patternfly-bootstrap-combobox/js/bootstrap-combobox.js"></script>

        <!-- Bootstrap Date Picker -->
        <script src="node_modules/patternfly/node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js"></script>

        <!-- Moment - required by Bootstrap Date Time Picker -->
        <script src="node_modules/patternfly/node_modules/moment/min/moment.min.js"></script>

        <!-- Bootstrap Date Time Picker - requires Moment -->
        <script src="node_modules/patternfly/node_modules/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js"></script>

        <!-- Bootstrap Select -->
        <script src="node_modules/patternfly/node_modules/bootstrap-select/dist/js/bootstrap-select.min.js"></script>

        <!-- Bootstrap Switch -->
        <script src="node_modules/patternfly/node_modules/bootstrap-switch/dist/js/bootstrap-switch.min.js"></script>

        <!-- Bootstrap Touchspin -->
        <script src="node_modules/patternfly/node_modules/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js"></script>

        <!-- Bootstrap Tree View -->
        <script src="node_modules/patternfly/node_modules/patternfly-bootstrap-treeview/dist/bootstrap-treeview.min.js"></script>

        <!-- Google Code Prettify - Syntax highlighting of code snippets -->
        <script src="node_modules/patternfly/node_modules/google-code-prettify/bin/prettify.min.js"></script>

        <!-- MatchHeight - Used to make sure dashboard cards are the same height -->
        <script src="node_modules/patternfly/node_modules/jquery-match-height/jquery.matchHeight-min.js"></script>

        <!-- Angular Application? You May Want to Consider Pulling Angular-PatternFly And Angular-UI Bootstrap instead of bootstrap.js -->
        <!-- See https://github.com/patternfly/angular-patternfly for more information -->

5. Prefer to use Bower? You can install patternfly using Bower (although NPM is recommended). Add the following style and script includes from `bower_components` to your HTML file(s), adjusting where necessary to pull in only what you need:

        <!-- RCUE Styles -->
        <!-- Note: No other CSS files are needed regardless of what other JS packages located in rcue/components that you decide to pull in -->
        <link rel="stylesheet" href="bower_components/patternfly/dist/css/rcue.min.css">
        <link rel="stylesheet" href="bower_components/patternfly/dist/css/rcue-additions.min.css">

        <!-- jQuery -->
        <script src="bower_components/jquery/dist/jquery.min.js"></script>

        <!-- Bootstrap JS -->
        <script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

        <!-- C3, D3 - Charting Libraries -->
        <script src="bower_components/c3/c3.min.js"></script>
        <script src="bower_components/d3/d3.min.js"></script>

        <!-- Datatables, jQuery Grid Component -->
        <!-- Note: jquery.dataTables.js must occur in the html source before rcue*.js.-->
        <script src="bower_components/datatables/media/js/jquery.dataTables.min.js"></script>
        <script src="bower_components/datatables-colvis/js/dataTables.colVis.js"></script>
        <script src="bower_components/datatables-colreorder/js/dataTables.colReorder.js"></script>

        <!-- RCUE Custom Componets -  Sidebar, Popovers and Datatables Customizations -->
        <!-- Note: jquery.dataTables.js must occur in the html source before patternfly*.js.-->
        <script src="bower_components/rcue/dist/js/patternfly.min.js"></script>

        <!-- Bootstrap Combobox -->
        <script src="bower_components/bootstrap-combobox/js/bootstrap-combobox.js"></script>

        <!-- Bootstrap Date Time Picker - requires Moment -->
        <script src="bower_components/moment/min/moment.min.js"></script>

        <!-- Bootstrap Date Picker -->
        <script src="bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js"></script>

        <!-- Bootstrap Select -->
        <script src="bower_components/bootstrap-select/dist/js/bootstrap-select.min.js"></script>

        <!-- Bootstrap Switch -->
        <script src="bower_components/bootstrap-switch/dist/js/bootstrap-switch.min.js"></script>

        <!-- Bootstrap Touchspin -->
        <script src="bower_components/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js"></script>

        <!-- Bootstrap Tree View -->
        <script src="bower_components/rcue-bootstrap-treeview/dist/bootstrap-treeview.min.js"></script>

        <!-- Google Code Prettify - Syntax highlighting of code snippets -->
        <script src="bower_components/google-code-prettify/bin/prettify.min.js"></script>

        <!-- MatchHeight - Used to make sure dashboard cards are the same height -->
        <script src="bower_components/matchHeight/jquery.matchHeight-min.js"></script>

        <!-- Angular Application? You May Want to Consider Pulling Angular-PatternFly And Angular-UI Bootstrap instead of bootstrap.js -->
        <!-- See https://github.com/patternfly/angular-patternfly for more information -->

6. Enjoy!!!

## Consuming RCUE LESS or SASS

RCUE includes LESS and SASS files for those that need to add their own customizations. When importing RCUE LESS or SASS into your application, there are a few configuration steps that need to be made to ensure that paths to all resources are properly resolved.

> If you used bower to install RCUE, then you will need to replace `node_modules` paths from these instructions with the equivalent `bower_components` path.

### Consuming RCUE LESS
1. Import the two main RCUE LESS files:

        @import 'patternfly/dist/less/rcue.less';
        @import 'patternfly/dist/less/rcue-additions.less';

1. Add `node_modules/` to the LESS compiler's search path options.

1. LESS compiler references for a few common build tools:
 - [Grunt](https://github.com/gruntjs/grunt-contrib-less)
 - [Gulp](https://github.com/stevelacy/gulp-less)
 - [Node](http://lesscss.org/usage/)
 - [Webpack](https://github.com/webpack-contrib/less-loader)

### Consuming RCUE SASS
1. Import the main RCUE SASS file:

        @import 'rcue';

1. Add the following paths to the SASS compiler's search path options:
 - `node_modules/patternfly/dist/sass`
 - `node_modules/bootstrap-sass/assets/stylesheets`
        - ** If installed in RCUE private dependency tree: `node_modules/patternfly/node_modules/bootstrap-sass/assets/stylesheets`
 - `node_modules/font-awesome-sass/assets/stylesheets`
        - ** If installed in RCUE private dependency tree:``node_modules/patternfly/node_modules/font-awesome-sass/assets/stylesheets`

 > ** In some cases, bootstrap-sass and font-awesome-sass might be installed into a private dependency tree within `node_modules/patternfly`. If this is the case, adjust the path to those dependencies accordingly.

1. SASS compiler references for a few common build tools:
 - [Grunt](https://github.com/gruntjs/grunt-contrib-sass)
 - [Gulp](https://github.com/dlmanning/gulp-sass)
 - [Node](https://github.com/sass/node-sass)
 - [Webpack](https://github.com/webpack-contrib/sass-loader)

### Resolving Static Files
RCUE uses some static font and image files. If you see 404 errors in your browser relating to these files, you may need to make some adjustments to ensure path references in the compiled css are correct. In our LESS and SASS, the `font-path` and `img-path` variables are used to define relative paths to these static files. The default values of these variables are `../fonts` and `../img`, respectively.  These relative paths may not resolve in the context of your application, so you may need to override these variables or copy the RCUE static files as part of your build.
