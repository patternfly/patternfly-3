/*global module,require*/
var lrSnippet = require('connect-livereload')();
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // configurable paths
  var projectConfig = {
    dist: 'dist',
    src: ''
  };

  try {
      projectConfig.src = require('./bower.json').appPath || projectConfig.src;
  } catch (e) {}

  grunt.initConfig({
    clean: {
      build: '<%= config.dist %>'
    },
    config: projectConfig,
    connect: {
      server: {
        options: {
          hostname: '0.0.0.0',
          middleware: function (connect) {
            return [
              lrSnippet,
              mountFolder(connect, projectConfig.src),
              mountFolder(connect, projectConfig.src + 'tests')
            ];
          },
          port: 9000
        }
      }
    },
    copy: {
      main: {
        files: [
          // copy Bootstrap font files
          {expand: true, cwd: 'components/bootstrap/dist/fonts/', src: ['*'], dest: 'dist/fonts/'},
          // copy Font Awesome font files
          {expand: true, cwd: 'components/font-awesome/fonts/', src: ['*'], dest: 'dist/fonts/'},
          // copy Bootstrap less files
          {expand: true, cwd: 'components/bootstrap/less/', src: ['**'], dest: 'less/lib/bootstrap/'},
          // copy Font Awesome less files
          {expand: true, cwd: 'components/font-awesome/less/', src: ['**'], dest: 'less/lib/font-awesome/'},
          // copy Bootstrap-Combobox less files
          {expand: true, cwd: 'components/bootstrap-combobox/less/', src: ['**'], dest: 'less/lib/bootstrap-combobox/'},
          // copy Bootstrap-Datepicker less files
          {expand: true, cwd: 'components/bootstrap-datepicker/less/', src: ['**'], dest: 'less/lib/bootstrap-datepicker/'},
          // copy Bootstrap-Select less files
          {expand: true, cwd: 'components/bootstrap-select/less/', src: ['**'], dest: 'less/lib/bootstrap-select/'},
          // Bootstrap Switch less files must be manually copied because of edits made to source less for strict-math purposes
          // manually copy 'components/bootstrap-switch/src/less/bootstrap3/' and make sure any math is wrapped with parentheses
          // copy Bootstrap Touchspin css file
          {expand: true, cwd: 'components/bootstrap-touchspin/dist/', src: ['jquery.bootstrap-touchspin.css'], dest: 'less/lib/bootstrap-touchspin/'},
          // copy C3 css file
          {expand: true, cwd: 'components/c3/', src: ['c3.css'], dest: 'less/lib/c3/'},
        ],
      },
    },
    csscount: {
      production: {
        src: [
          'dist/css/patternfly*.min.css'
        ],
        options: {
          maxSelectors: 4096
        }
      }
    },
    cssmin: {
      production: {
        files: [{
          expand: true,
          cwd: 'dist/css',
          src: ['patternfly*.css', '!*.min.css'],
          dest: 'dist/css',
          ext: '.min.css',
        }],
        options: {
          sourceMap: true
        }
      }
    },
    jekyll: {
      options: {
        src: 'tests-src'
      },
      tests: {
        options: {
          dest: 'tests'
        }
      }
    },
    jslint: {
      client: {
        src: [
          'dist/js/patternfly.js'
        ],
        directives: {
          // node environment
          node: false,
          // browser environment
          browser: true,
          // allow dangling underscores
          nomen: true,
          // allow todo statements
          todo: true,
          // allow unused parameters
          unparam: true,
          // add predefined libraries
          predef: [
            'jQuery',
            'Event'
          ],
          indent: 2
        }
      }
    },
    less: {
      patternfly: {
        files: {
          'dist/css/patternfly.css': 'less/patternfly.less',
        },
        options: {
          paths: ['less/'],
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapFilename: 'dist/css/patternfly.css.map',
          sourceMapURL: 'patternfly.css.map'
        }
      },
      patternflyAdditions: {
        files: {
          'dist/css/patternfly-additions.css': 'less/patternfly-additions.less'
        },
        options: {
          paths: ['less/'],
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapFilename: 'dist/css/patternfly-additions.css.map',
          sourceMapURL: 'patternfly-additions.css.map'
        }
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      production: {
        files: {
          'dist/js/patternfly.min.js': ['dist/js/patternfly.js']
        }
      }
    },
    watch: {
      copy: {
        files: 'components/**/*',
        tasks: ['copy']
      },
      jekyll: {
        files: 'tests-src/**/*',
        tasks: ['jekyll']
      },
      less: {
        files: 'less/*.less',
        tasks: ['less']
      },
      css: {
        files: ['dist/css/patternfly*.css', 'dist/css/!*.min.css'],
        tasks: ['cssmin', 'csscount']
      },
      js: {
        files: ['dist/js/*.js', '!dist/js/*.min.js'],
        tasks: ['jslint', 'uglify']
      },
      livereload: {
        files: ['dist/css/*.css', 'dist/js/*.js', 'tests/*.html', '!tests-src/*.html']
      },
      options: {
        livereload: true
      }
    }
  });

  grunt.registerTask('build', [
    'copy',
    'jekyll',
    'less',
    'cssmin',
    'csscount',
    'jslint',
    'uglify'
  ]);

  grunt.registerTask('server', [
    'connect:server',
    'watch'
  ]);

  grunt.registerTask('default', ['build']);
};
