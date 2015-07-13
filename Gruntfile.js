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
            'jQuery'
          ],
          indent: 2
        }
      }
    },
    less: {
      development: {
        files: {
          'dist/css/patternfly.css': 'less/patternfly.less',
          'dist/css/patternfly-additions.css': 'less/patternfly-additions.less',
        },
        options: {
          paths: ['less/']
        }
      },
      production: {
        files: {
          'dist/css/patternfly.min.css': 'less/patternfly.less',
          'dist/css/patternfly-additions.min.css': 'less/patternfly-additions.less'
        },
        options: {
          cleancss: true,
          paths: ['less/']
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
      css: {
        files: 'less/*.less',
        tasks: ['less']
      },
      jekyll: {
        files: 'tests-src/**/*',
        tasks: ['jekyll']
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
    'jekyll',
    'less',
    'jslint',
    'uglify'
  ]);

  grunt.registerTask('server', [
    'connect:server',
    'watch'
  ]);

  grunt.registerTask('default', ['build']);
};
