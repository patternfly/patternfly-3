/*global module,require*/
module.exports = function (grunt) {
  'use strict';

  // configurable paths
  var projectConfig = {
    dist: 'dist',
    src: ''
  };

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

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
          livereload: true,
          base: [
            projectConfig.src,
            projectConfig.dist + '/tests'
          ],
          port: 9000
        }
      }
    },
    copy: {
      main: {
        files: [
          // copy Bootstrap font files
          {expand: true, cwd: 'node_modules/bootstrap/dist/fonts/', src: ['*'], dest: 'dist/fonts/'},
          // copy Font Awesome font files
          {expand: true, cwd: 'node_modules/font-awesome/fonts/', src: ['*'], dest: 'dist/fonts/'},
          // copy Patternfly font files
          {expand: true, cwd: 'src/fonts/', src: ['*'], dest: 'dist/fonts/'},
          // copy Bootstrap less files
          {expand: true, cwd: 'node_modules/bootstrap/less/', src: ['**'], dest: 'less/lib/bootstrap/'},
          // copy Font Awesome less files
          {expand: true, cwd: 'node_modules/font-awesome/less/', src: ['**'], dest: 'less/lib/font-awesome/'},
          // copy Bootstrap-Combobox less files
          {expand: true, cwd: 'node_modules/patternfly-bootstrap-combobox/less/', src: ['**'], dest: 'less/lib/bootstrap-combobox/'},
          // copy Bootstrap-Datepicker less files
          {expand: true, cwd: 'node_modules/bootstrap-datepicker/less/', src: ['**'], dest: 'less/lib/bootstrap-datepicker/'},
          // copy Bootstrap-Select less files
          {expand: true, cwd: 'node_modules/bootstrap-select/less/', src: ['**'], dest: 'less/lib/bootstrap-select/'},
          // Bootstrap Switch less files must be manually copied because of edits made to source less for strict-math purposes
          // manually copy 'node_modules/bootstrap-switch/src/less/bootstrap3/' and make sure any math is wrapped with parentheses
          // copy Bootstrap Touchspin css file
          {expand: true, cwd: 'node_modules/bootstrap-touchspin/dist/', src: ['jquery.bootstrap-touchspin.css'], dest: 'less/lib/bootstrap-touchspin/'},
          // copy C3 css file
          {expand: true, cwd: 'node_modules/c3/', src: ['c3.css'], dest: 'less/lib/c3/'},
          //copy images
          {expand: true, cwd: 'src/img/', src: ['**'], dest: 'dist/img/'}
        ],
      },
      js: {
        files: [
          // copy js src file
          {expand: true, cwd: 'src/js/', src: ['patternfly.js'], dest: 'dist/js/'}
        ]
      }
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
    jekyll: {
      options: {
        src: 'tests/pages'
      },
      tests: {
        options: {
          dest: 'dist/tests'
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
          'dist/js/patternfly.min.js': ['src/js/patternfly.js']
        }
      }
    },
    watch: {
      copy: {
        files: [
          'node_modules/bootstrap/dist/fonts/**/*',
          'node_modules/font-awesome/fonts/**/*',
          'node_modules/bootstrap/less/**/*',
          'node_modules/font-awesome/less/**/*',
          'node_modules/patternfly-bootstrap-combobox/less/**/*',
          'node_modules/bootstrap-datepicker/less/**/*',
          'node_modules/bootstrap-select/less/**/*',
          'node_modules/bootstrap-touchspin/dist/**/*',
          'node_modules/c3/**/*',
          'src/fonts/**/*',
          'src/img/**/*'
        ],
        tasks: ['copy']
      },
      jekyll: {
        files: 'tests/pages/**/*',
        tasks: ['jekyll']
      },
      less: {
        files: 'less/*.less',
        tasks: ['less']
      },
      css: {
        files: ['dist/css/patternfly*.css', 'dist/css/!*.min.css'],
        tasks: ['cssmin','csscount']
      },
      js: {
        files: ['src/js/*.js'],
        tasks: ['eslint', 'uglify', 'copy:js']
      },
      livereload: {
        files: ['dist/css/*.css', 'dist/js/*.js', 'dist/tests/*.html', '!tests/pages/*.html']
      },
      options: {
        livereload: true
      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },
    htmlhint: {
      html: {
        src: ['dist/tests/**/*.html'],
        options: {
          htmlhintrc: '.htmlhintrc'
        }
      }
    },
    eslint: {
      options: {
        configFile: 'eslint.yaml'
      },
      target: [
        'Gruntfile.js',
        'src/js/**/*.js'
      ]
    },
    stylelint: {
      src: ['less/*.less']
    },
    postcss: {
      options: {
        processors: [
          require('pixrem')(), // add fallbacks for rem units
          require('autoprefixer')({browsers: ['last 3 versions', 'ie 9']}) // add vendor prefixes,
        ]
      },
      dist: {
        files: [
          {
            expand: true,     // Enable dynamic expansion.
            cwd: 'dist/css/',      // Src matches are relative to this path.
            src: ['*.css'], // Actual pattern(s) to match.
            dest: 'dist/css'   // Destination path prefix.
          }
        ]
      }

    }
  });

  grunt.registerTask('build', [
    'copy',
    'jekyll',
    'less',
    'cssmin',
    'postcss',
    'csscount',
    'eslint',
    'uglify',
    'htmlhint',
    'stylelint'
  ]);

  grunt.registerTask('server', [
    'connect:server',
    'watch'
  ]);

  grunt.registerTask('default', ['build']);
};
