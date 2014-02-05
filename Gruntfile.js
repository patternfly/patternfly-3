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
      src: '',
      dist: 'dist'
  };

  try {
      projectConfig.src = require('./bower.json').appPath || projectConfig.src;
  } catch (e) {}

  grunt.initConfig({
    config: projectConfig,
    clean: {
      build: '<%= config.dist %>'
    },
    connect: {
      server: {
        options: {
          port: 9000,
          hostname: '0.0.0.0',
          middleware: function (connect) {
            return [
                lrSnippet,
                mountFolder(connect, projectConfig.src),
                mountFolder(connect, projectConfig.src + 'tests')
            ];
          }
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      css: {
        files: 'less/*.less',
        tasks: ['less']
      },
      js: {
        files: 'dist/js/patternfly.js',
        tasks: ['uglify']
      },
      livereload: {
        files: [
          'tests/*.html',
          'dist/css/*.css',
          'dist/js/*.js'
        ]
      }
    },
    less: {
      development: {
        options: {
          paths: ['less/']
        },
        files: {
          'dist/css/patternfly.css': 'less/patternfly.less'
        }
      },
      production: {
        options: {
          paths: ['less/'],
          cleancss: true
        },
        files: {
          'dist/css/patternfly.min.css': 'less/patternfly.less'
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
    }
  });

  grunt.registerTask('server', [
    'connect:server',
    'watch'
  ]);

  grunt.registerTask('build', [
    'less',
    'uglify'
  ]);

  grunt.registerTask('default', ['build']);
};
