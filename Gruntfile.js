/*global module,require*/
var pageBuilder = require('./tests/pages/_script/page-builder');

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
    config: projectConfig,
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
    clean: {
      build: '<%= config.dist %>'
    },
    concat: {
      js: {
        files: {
          'dist/js/patternfly-settings.js': [
            'src/js/patternfly-settings-base.js',
            'src/js/patternfly-settings-colors.js',
            'src/js/patternfly-settings-charts.js'
          ],
          'dist/js/patternfly-functions.js': [
            'src/js/patternfly-functions-base.js',
            'src/js/patternfly-functions-list.js',
            'src/js/patternfly-functions-sidebar.js',
            'src/js/patternfly-functions-popovers.js',
            'src/js/patternfly-functions-data-tables.js',
            'src/js/patternfly-functions-navigation.js',
            'src/js/patternfly-functions-count-chars.js',
            'src/js/patternfly-functions-colors.js',
            'src/js/patternfly-functions-charts.js',
            'src/js/patternfly-functions-fixed-heights.js',
            'src/js/patternfly-functions-tree-grid.js',
            'src/js/patternfly-functions-vertical-nav.js'
          ],
          'dist/js/patternfly.js': [
            'dist/js/patternfly-settings.js',
            'dist/js/patternfly-functions.js'
          ]
        }
      }
    },
    sync: {
      // '/src/**/*.*' /src/
      showcase: {
        files: [
          {
            expand: true,
            cwd: 'tests/pages/jquery',
            src: ['src/**'],
            dest: 'dist/tests/jquery'
          },
          {
            expand: true,
            cwd: 'tests/pages/css',
            src: ['src/**'],
            dest: 'dist/tests/css'
          }
        ]
      },
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
          {expand: true, cwd: 'src/img/', src: ['**'], dest: 'dist/img/'},
          // Dependencies
          // copy Bootstrap less files
          {expand: true, cwd: 'node_modules/bootstrap/less/', src: ['**'], dest: 'dist/less/dependencies/bootstrap/'},
          // copy Font Awesome less files
          {expand: true, cwd: 'node_modules/font-awesome/less/', src: ['**'], dest: 'dist/less/dependencies/font-awesome/'},
          // copy Bootstrap-Combobox less files
          {expand: true, cwd: 'node_modules/patternfly-bootstrap-combobox/less/', src: ['**'], dest: 'dist/less/dependencies/bootstrap-combobox/'},
          // copy Bootstrap-Datepicker less files
          {expand: true, cwd: 'node_modules/bootstrap-datepicker/less/', src: ['**'], dest: 'dist/less/dependencies/bootstrap-datepicker/'},
          // copy Bootstrap-Select less files
          {expand: true, cwd: 'node_modules/bootstrap-select/less/', src: ['**'], dest: 'dist/less/dependencies/bootstrap-select/'},
          // Bootstrap Switch less files must be manually copied because of edits made to source less for strict-math purposes
          // manually copy 'node_modules/bootstrap-switch/src/less/bootstrap3/' and make sure any math is wrapped with parentheses
          // copy Bootstrap Touchspin css file
          {expand: true, cwd: 'node_modules/bootstrap-touchspin/dist/', src: ['jquery.bootstrap-touchspin.css'], dest: 'dist/less/dependencies/bootstrap-touchspin/'},
          // copy C3 css file
          {expand: true, cwd: 'node_modules/c3/', src: ['c3.css'], dest: 'dist/less/dependencies/c3/'}
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
      patternflyJquery: {
        files: {
          'dist/css/patternfly-jquery.css': 'tests/pages/jquery/src/jquery-showcase.less',
        },
        options: {
          paths: [
            'src/less/',
            'tests/pages/jquery/src/',
            'node_modules/'
          ],
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapFilename: 'dist/css/patternfly-jquery.css.map',
          sourceMapURL: 'patternfly-jquery.css.map'
        }
      },
      patternflyCSS: {
        files: {
          'dist/css/patternfly-showcase.css': 'tests/pages/css/src/css-showcase.less',
        },
        options: {
          paths: [
            'src/less/',
            'tests/pages/css/src/',
            'node_modules/'
          ],
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapFilename: 'dist/css/patternfly-css.css.map',
          sourceMapURL: 'patternfly-css.css.map'
        }
      },
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
          'dist/js/patternfly.min.js': ['dist/js/patternfly.js'],
          'dist/js/patternfly-settings.min.js': ['dist/js/patternfly-settings.js'],
          'dist/js/patternfly-functions.min.js': ['dist/js/patternfly-functions.js'],
          'dist/js/patternfly.dataTables.pfEmpty.min.js':  ['src/js/patternfly.dataTables.pfEmpty.js'],
          'dist/js/patternfly.dataTables.pfFilter.min.js': ['src/js/patternfly.dataTables.pfFilter.js'],
          'dist/js/patternfly.dataTables.pfPagination.min.js': ['src/js/patternfly.dataTables.pfPagination.js'],
          'dist/js/patternfly.dataTables.pfResize.min.js': ['src/js/patternfly.dataTables.pfResize.js'],
          'dist/js/patternfly.dataTables.pfSelect.min.js': ['src/js/patternfly.dataTables.pfSelect.js'],
          'dist/tests/jquery/src/showcase.min.js': ['tests/pages/jquery/src/*.js']
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
        tasks: ['pages']
      },
      less: {
        files: ['src/less/*.less', 'tests/pages/jquery/src/*.less', 'tests/pages/css/src/*.less'],
        tasks: ['less']
      },
      css: {
        files: ['dist/css/patternfly*.css', 'dist/css/!*.min.css'],
        tasks: ['cssmin','csscount']
      },
      js: {
        files: ['src/js/*.js'],
        tasks: ['eslint', 'concat', 'copy:js', 'uglify']
      },
      showcase: {
        files: ['tests/pages/jquery/**/*', 'tests/pages/css/**/*'],
        tasks: ['showcaseBuild', 'sync:showcase']
      },
      options: {
        livereload: false
      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },
    htmlhint: {
      html: {
        // TODO: fix html lint errors and remove exclusions
        // src: ['dist/tests/**/*.html'],
        src: ['dist/tests/**/*.html', '!dist/tests/css/**/*.*','!dist/tests/jquery/**/*.*'],
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
        'src/js/**/*.js',
        'tests/pages/_script/**/*.js'
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
      // browser-sync start --server 'dist' --files '' --
    },
    browserSync: {
      bsFiles: {
        src : 'dist/tests/**/*.*'
      },
      options: {
        server: {
          baseDir: "./",
        },
        port: 9000,
        startPath: 'dist/tests/'
      }
    }
  });

  grunt.registerTask ('showcaseBuild', 'Builds the component showcase.', function (target) {
    var showcaseBuilder = require('./scripts/showcase-builder');
    var done = this.async();
    grunt.log.writeln('Starting showcase build.');
    showcaseBuilder.builder('tests/pages/jquery', 'dist/tests/jquery', {escapeCode: true})
      .subscribe(result => {
        grunt.log.writeln('jQuery Showcase build complete.');
        done();
      }, error => {
        grunt.log.error(error);
        throw error;
      });
    showcaseBuilder.builder('tests/pages/css', 'dist/tests/css', {escapeCode: false})
      .subscribe(result => {
        grunt.log.writeln('CSS Showcase build complete.');
        done();
      }, error => {
        grunt.log.error(error);
        throw error;
      });
  });

  grunt.registerTask('pages', 'Builds the PatternFly test pages.', function (_target) {
    var target = _target || process.env.PF_PAGE_BUILDER || 'script';
    var done;
    if (target === 'jekyll') { // eg: grunt build:jekyll || PF_PAGE_BUILDER=jekyll build
      grunt.log.writeln('Builidng test pages with ruby jekyll');
      grunt.task.run('run:bundleInstall', 'jekyll');
    } else if (target === 'script') {  // eg: grunt build:script
      grunt.log.writeln('Builidng test pages with liquid.js');
      done = this.async();
      pageBuilder.build()
      .then(function () {
        done();
      });
    } else {
      grunt.log.writeln('Invalid taget:', target);
    }
  });

  grunt.registerTask('build', [
    'clean',
    'concat',
    'copy',
    'pages',
    'showcaseBuild',
    'sync:showcase',
    'less',
    'cssmin',
    'postcss',
    'csscount',
    'eslint',
    'uglify',
    'htmlhint',
    'stylelint'
  ]);

  grunt.registerTask('serve', [
    'browserSync',
    'watch'
  ]);

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  grunt.registerTask('default', ['build']);

  grunt.registerTask('html:test', ['htmlhint']);
};
