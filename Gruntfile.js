/*global module,require*/
/* eslint-disable */
var pageBuilder = require('./tests/pages/_script/page-builder'),
  open = require('open');

module.exports = function (grunt) {
  'use strict';

  // configurable paths
  var projectConfig = {
    dist: 'dist',
    src: ''
  };

  // '--sass' command line argument exists?
  var buildSass = grunt.option('sass');

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  try {
    projectConfig.src = require('./bower.json').appPath || projectConfig.src;
  } catch (e) {}

  grunt.initConfig({
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
    clean: {
      build: '<%= config.dist %>',
      sass: 'src/sass/converted',
      testBuild: 'tests/build'
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
    copy: {
      fonts: {
        files: [
          // copy Bootstrap font files
          {
            expand: true,
            cwd: 'node_modules/bootstrap/dist/fonts/',
            src: ['*'],
            dest: 'dist/fonts/'
          },
          // copy Font Awesome font files
          {
            expand: true,
            cwd: 'node_modules/font-awesome/fonts/',
            src: ['*'],
            dest: 'dist/fonts/'
          },
          // copy Patternfly font files
          {
            expand: true,
            cwd: 'src/fonts/',
            src: ['*'],
            dest: 'dist/fonts/'
          }
        ]
      },
      images: {
        // copy images
        files: [
          {
            expand: true,
            cwd: 'src/img/',
            src: ['**'],
            dest: 'dist/img/'
          }
        ]
      },
      less: {
        files: [
          // copy Patternfly less files
          {
            expand: true,
            cwd: 'src/less/',
            src: ['*'],
            dest: 'dist/less/'
          },
          // Dependencies
          // copy Bootstrap less files
          {
            expand: true,
            cwd: 'node_modules/bootstrap/less/',
            src: ['**'],
            dest: 'dist/less/dependencies/bootstrap/'
          },
          // copy Font Awesome less files
          {
            expand: true,
            cwd: 'node_modules/font-awesome/less/',
            src: ['**'],
            dest: 'dist/less/dependencies/font-awesome/'
          },
          // copy Bootstrap-Combobox less files
          {
            expand: true,
            cwd: 'node_modules/patternfly-bootstrap-combobox/less/',
            src: ['**'],
            dest: 'dist/less/dependencies/bootstrap-combobox/'
          },
          // copy Bootstrap-Datepicker less files
          {
            expand: true,
            cwd: 'node_modules/bootstrap-datepicker/less/',
            src: ['**'],
            dest: 'dist/less/dependencies/bootstrap-datepicker/'
          },
          // copy Bootstrap-Select less files
          {
            expand: true,
            cwd: 'node_modules/bootstrap-select/less/',
            src: ['**'],
            dest: 'dist/less/dependencies/bootstrap-select/'
          },
          // copy Bootstrap-Slider less files
          {
            expand: true,
            cwd: 'node_modules/bootstrap-slider/src/less',
            src: ['**'],
            dest: 'dist/less/dependencies/bootstrap-slider/'
          },
          // Bootstrap Switch less files must be manually copied because of edits made to source less for strict-math purposes
          // manually copy 'node_modules/bootstrap-switch/src/less/bootstrap3/' and make sure any math is wrapped with parentheses
          // copy Bootstrap Touchspin css file
          {
            expand: true,
            cwd: 'node_modules/bootstrap-touchspin/dist/',
            src: ['jquery.bootstrap-touchspin.css'],
            dest: 'dist/less/dependencies/bootstrap-touchspin/'
          },
          // copy C3 css file
          {
            expand: true,
            cwd: 'node_modules/c3/',
            src: ['c3.css'],
            dest: 'dist/less/dependencies/c3/'
          },
        ]
      },
      sass: {
        files: [

          // copy bootstrap-select sass files
          {
            expand: true,
            cwd: 'node_modules/bootstrap-select/sass',
            src: '**/*.scss',
            dest: 'dist/sass/patternfly/dependencies/bootstrap-select'
          },
          // copy bootstrap-touchspin css file and change extension to scss
          {
            expand: false,
            src: 'node_modules/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.css',
            dest: 'dist/sass/patternfly/dependencies/bootstrap-touchspin/_jquery.bootstrap-touchspin.scss'
          },
          // copy c3 css file and change extension to scss
          {
            expand: false,
            src: 'node_modules/c3/c3.css',
            dest: 'dist/sass/patternfly/dependencies/c3/_c3.scss'
          },
          // copy converted sass files
          {
            expand: true,
            cwd: 'node_modules/eonasdan-bootstrap-datetimepicker/src/sass',
            src: '**/*.scss',
            dest: 'dist/sass/patternfly/dependencies/eonasdan-bootstrap-datetimepicker/'
          },
          // copy converted sass files
          {
            expand: true,
            cwd: 'src/sass/converted',
            src: '**/*.scss',
            dest: 'dist/sass/'
          },
          {
            // copy static sass partials to overwrite equivalent converted sass files
            expand: true,
            cwd: 'src/sass/static',
            src: '**/*.scss',
            dest: 'dist/sass/'
          }
        ]
      },
      js: {
        files: [
          // copy js src file
          {expand: true, cwd: 'src/js/', src: ['*.js'], dest: 'dist/js/'}
        ]
      },
      lessBuild: {
        files: [
          {
            // copy css built from less into dist/css
            expand: true,
            cwd: 'tests/build/less',
            src: ['**/*.css', '**/*.map'],
            dest: 'dist/css/'
          }
        ]
      },
      sassBuild:{
        files: [
          {
            // copy css built from less into dist/css
            expand: true,
            cwd: 'tests/build/sass',
            src: ['**/*.css', '**/*.map'],
            dest: 'dist/css/'
          }
        ]
      }
    },
    csscount: {
      production: {
        src: [
          'dist/css/patternfly*.min.css'
        ],
        options: {
          maxSelectors: 4095
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
          cwd: 'tests/build',
          src: ['**/patternfly*.css', '**/!*.min.css'],
          dest: 'tests/build',
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
          'tests/build/less/patternfly.css': 'src/less/patternfly.less',
        },
        options: {
          paths: [
            'src/less/',
            'node_modules/'
          ],
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapFilename: 'tests/build/less/patternfly.css.map',
          sourceMapURL: 'patternfly.css.map'
        }
      },
      patternflyAdditions: {
        files: {
          'tests/build/less/patternfly-additions.css': 'src/less/patternfly-additions.less'
        },
        options: {
          paths: [
            'src/less/',
            'node_modules/'
          ],
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapFilename: 'tests/build/less/patternfly-additions.css.map',
          sourceMapURL: 'patternfly-additions.css.map'
        }
      }
    },
    lessToSass: {
      convert_within_custom_replacements: {
        files: [
          {
            expand: true,
            cwd: 'src/less',
            src: ['*.less','!patternfly.less', '!patternfly-additions.less', '!application-launcher.less'],
            dest: 'src/sass/converted/patternfly/',
            rename: function(dest, src) {
              return dest + '_' + src.replace('.less', '.scss');
            }
          },
          {
            expand: true,
            cwd: 'node_modules/bootstrap-datepicker/less',
            src: ['*.less'],
            ext: '.scss',
            dest: 'dist/sass/patternfly/dependencies/bootstrap-datepicker'
          },
          {
            expand: true,
            cwd: 'node_modules/bootstrap-switch/src/less/bootstrap3',
            src: ['**/*.less'],
            ext: '.scss',
            dest: 'dist/sass/patternfly/dependencies/bootstrap-switch'
          },
          {
            expand: true,
            cwd: 'node_modules/patternfly-bootstrap-combobox/less',
            src: ['*.less'],
            ext: '.scss',
            dest: 'dist/sass/patternfly/dependencies/bootstrap-combobox'
          },
        ],
        options: {
          excludes: ['variables', 'default'],
          replacements: [
            {
              // Customize variable conversion to include newer css reserved words.
              pattern: /(?!@debug|@import|@media|@keyframes|@font-face|@include|@extend|@mixin|@supports|@-\w)@/gi,
              replacement: '$',
              order: 0
            },
            {
              //
              pattern: /^\$(img|font)-path:(\s*)"(.*)"(.*);(.*)$/mgi,
              replacement: '\$$$1-path:$2if($pf-sass-asset-helper, "", "$3/")$4;$5',
              order: 1
            },
            {
              //
              pattern: /^\$icon-font-path:(\s*)"(.*)"(.*);(.*)$/mgi,
              replacement: '\$icon-font-path:$1if($pf-sass-asset-helper, "", "$2")$3;$4',
              order: 1
            },
            {
              // Add !default flag to variable declarations without leading whitespace.
              pattern: /^(\$.*?:.*?);(\s*\/\/.*)?$/mgi,
              replacement: '$1 !default;$2',
              order: 2
            },
            {
              // Include mixins with no arguments
              pattern: /(\s+)\.([\w\-]+)\(\)/gi,
              replacement: '$1@include $2()',
              order: 3
            },
            {
              // Interpolates second ampersand where double ampersands are used
              pattern: /\&\&/gi,
              replacement: '&#{&}',
              order: 22
            },
            {
              // Interpolates ampersands that directly follow (are touching) a definition
              // e.g. somedef& becomes somedef#{&}
              pattern: /(\w+)\&/gi,
              replacement: '$1#{&}',
              order: 23
            },
            {
              // Namespaced mixins are detected as includes by default conversion
              // process. Remove namespacing by concatenating namespace and mixin name.
              // #gradient {
              //    @include striped(){...}
              // }
              //
              // becomes
              //
              // @mixin gradient-striped(){...}
              pattern: /^#([\w\-]+)\s*{\s*@include\s*([\w\-]*)\((.*)\)\s*{([\s\S]*?)}\s*}/mgi,
              replacement: '@mixin $1-$2($3){$4}',
              order: 24
            },
            {
              // Remove "!default" flag from mixin declarations
              pattern: /@mixin.*!default.*/gi,
              replacement: function(match){
                return match.replace(/\s*!default\s*/gi, '');
              },
              order: 25
            },
            {
              // Replace semi-colons with commas in mixins and includes
              pattern: /(@mixin |@include )([\w\-]*)\s*(\(.*\))(\s*[{;]?)/gi,
              replacement: function(match, p1, p2, p3, p4){
                return p1+p2+p3.replace(/;/g, ',')+p4;
              },
              order: 26
            },
            {
              // Fix bug in grunt-less-to-sass that puts "!important" inside mixin parens.
              pattern: /[\w\-]*: [\w\-]*\(.*\s*!important.*\)/gi,
              replacement: function(match){
                return match.replace(/\s*!important\s*/g, '') + ' !important';
              },
              order: 27
            },
            {
              pattern: /\&:extend\((.*)\)/gi,
              replacement: '@extend $1',
              order: 28
            },
            {
              pattern: /url\(\"\#\{\$font-path\}\/(.+?)\"\)/gi,
              replacement: 'url(if($bootstrap-sass-asset-helper, twbs-font-path("#{$font-path}$1"), "#{$font-path}$1"))',
              order: 30
            },
            {
              pattern: /url\(\"\#\{\$img-path\}\/(.+?)\"\)/gi,
              replacement: 'url(if($bootstrap-sass-asset-helper, twbs-image-path("#{$img-path}$1"), "#{$img-path}$1"))',
              order: 31
            },
          ]
        }
      }
    },
    sass: {
      patternfly: {
        files: {
          'tests/build/sass/patternfly.css': 'src/sass/build.scss',
        },
        options: {
          outputStyle: 'expanded',
          includePaths: [
            'node_modules/bootstrap-sass/assets/stylesheets',
            'node_modules/font-awesome-sass/assets/stylesheets',
            'node_modules/'
          ],
        }
      },
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
        tasks: ['pages']
      },
      less: {
        files: ['src/less/*.less'],
        tasks: ['less', 'copy:lessBuild']
      },
      sass: {
        files: ['dist/sass/**/*.scss', 'src/sass/**/*.scss'],
        tasks: ['copy:sass','sass', 'copy:sassBuild']
      },
      css: {
        files: ['dist/css/patternfly*.css', 'dist/css/!*.min.css'],
        tasks: ['cssmin','csscount']
      },
      js: {
        files: ['src/js/*.js'],
        tasks: ['eslint', 'concat', 'copy:js', 'uglify']
      },
      livereload: {
        files: ['dist/css/*.css', 'dist/js/*.js', 'dist/tests/*.html', '!tests/pages/*.html']
      },
      options: {
        livereload: true
      },
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
            cwd: 'tests/build/',      // Src matches are relative to this path.
            src: ['**/*.css'], // Actual pattern(s) to match.
            dest: 'tests/build'   // Destination path prefix.
          }
        ]
      }

    }
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

  grunt.registerTask('build', function(){
    grunt.task.run([
      'clean',
      'concat',
      'pages',
      'lessToSass',
      'copy:fonts',
      'copy:images',
      'copy:less',
      'copy:sass',
      'copy:js',
      'sass',
      'less',
      'cssmin',
      'postcss',
      'eslint',
      'uglify',
      'htmlhint',
      'stylelint'
    ]);

    if(buildSass){
      grunt.task.run('copy:sassBuild');
    } else {
      grunt.task.run(['copy:lessBuild','csscount']);
    }
  });

  grunt.registerTask('serve', [
    'connect:server',
    'open',
    'watch'
  ]);

  grunt.registerTask('open', function () {
    open('http://localhost:9000');
  });

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  grunt.registerTask('default', ['build']);
};
