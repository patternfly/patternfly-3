/*global module,require*/
var lrSnippet = require('connect-livereload')();

var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
  };

module.exports = function (grunt) {
  'use strict';

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
    concat: {
      dist: {
        src: ['src/js/common.js', 'src/js/*.js'],
        dest: 'dist/js/patternfly.js'
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
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        ignores: ['**.min.js']
      },
      files: ['gruntfile.js', 'src/**/*.js']
    },
    less: {
      development: {
        files: {
          'dist/css/patternfly.css': 'src/less/patternfly.less'
        },
        options: {
          paths: ['less/']
        }
      },
      production: {
        files: {
          'dist/css/patternfly.min.css': 'src/less/patternfly.less'
        },
        options: {
          cleancss: true,
          paths: ['less/']
        }
      }
    },
    clean: {
			distCSS: 'dist/css/**',
      distJS: 'dist/js/**',
      distLESS: 'dist/less/**',
		},
		copy: {
			less: {
				expand: true,
				cwd: 'src/less',
				src: ['variables.less', 'mixins.less'],
				dest: 'dist/less'
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
        files: 'src/less/*.less',
        tasks: ['less']
      },
      jekyll: {
        files: 'tests-src/**/*',
        tasks: ['jekyll']
      },
      js: {
        files: ['dist/js/*.js', '!dist/js/*.min.js'],
        tasks: ['uglify']
      },
      concat: {
        files: ['src/js/*.js'],
        tasks: ['concat']
      },
      livereload: {
        files: ['dist/css/*.css', 'dist/js/*.js', 'tests/*.html', '!tests-src/*.html']
      },
      options: {
        livereload: true
      }
    }
  });

  grunt.registerTask('lint', [
    'jshint'
  ]);

  grunt.registerTask('build', [
    'clean:distCSS',
    'clean:distJS',
    'clean:distLESS',
    'lint',
    'concat:dist',
    'jekyll',
    'less',
    'copy:less',
    'uglify'
  ]);

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('serve', [
    'connect:server',
    'watch'
  ]);

  grunt.registerTask('default', ['build']);
};
