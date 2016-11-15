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
    run: {
      options: {
      },
      bundleInstall: {
        cmd: 'bundle',
        args: [
          'install'
        ]
      }
    },
    concat: {
      js: {
        src: ['src/js/patternfly-settings.js', 'src/js/patternfly-functions.js'],
        dest: 'dist/js/patternfly.js'
      }
    },
    copy: {
      main: {
        files: [
          // copy Bootstrap font files
          {expand: true, cwd: 'node_modules/bootstrap/dist/fonts/', src: ['*'], dest: 'dist/fonts/'},
          // copy Font Awesome font files
          {expand: true, cwd: 'node_modules/font-awesome/fonts/', src: ['*'], dest: 'dist/fonts/'},
          // copy Patternfly less files
          {expand: true, cwd: 'src/less/', src: ['*'], dest: 'dist/less/'},
          // copy Patternfly font files
          {expand: true, cwd: 'src/fonts/', src: ['*'], dest: 'dist/fonts/'},
          //copy images
          {expand: true, cwd: 'src/img/', src: ['**'], dest: 'dist/img/'}
        ]
      },
      js: {
        files: [
          // copy js src file
          {expand: true, cwd: 'src/js/', src: ['*.js'], dest: 'dist/js/'}
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
        src: 'tests/pages',
        bundleExec: 'true'
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
          'dist/css/patternfly.css': 'src/less/patternfly.less',
        },
        options: {
          paths: [
            'src/less/',
            'node_modules/'
          ],
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapFilename: 'dist/css/patternfly.css.map',
          sourceMapURL: 'patternfly.css.map'
        }
      },
      patternflyAdditions: {
        files: {
          'dist/css/patternfly-additions.css': 'src/less/patternfly-additions.less'
        },
        options: {
          paths: [
            'src/less/',
            'node_modules/'
          ],
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
          'dist/js/patternfly.min.js':           ['dist/js/patternfly.js'],
          'dist/js/patternfly-settings.min.js':  ['dist/js/patternfly-settings.js'],
          'dist/js/patternfly-functions.min.js': ['dist/js/patternfly-functions.js'],
          'dist/js/patternfly.dataTables.pfEmpty.min.js':  ['src/js/patternfly.dataTables.pfEmpty.js'],
          'dist/js/patternfly.dataTables.pfFilter.min.js': ['src/js/patternfly.dataTables.pfFilter.js'],
          'dist/js/patternfly.dataTables.pfResize.min.js': ['src/js/patternfly.dataTables.pfResize.js'],
          'dist/js/patternfly.dataTables.pfSelect.min.js': ['src/js/patternfly.dataTables.pfSelect.js']
        }
      }
    },
    watch: {
      copy: {
        files: [
          'node_modules/bootstrap/dist/fonts/**/*',
          'node_modules/font-awesome/fonts/**/*',
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
        files: ['src/less/*.less'],
        tasks: ['less']
      },
      css: {
        files: ['dist/css/patternfly*.css', 'dist/css/!*.min.css'],
        tasks: ['cssmin','csscount']
      },
      js: {
        files: ['src/js/*.js'],
        tasks: ['eslint', 'concat:js', 'copy:js', 'uglify']
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
      src: ['src/less/*.less']
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
    'run:bundleInstall',
    'concat',
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
