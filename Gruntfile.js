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
        watch: {
            options: {
                livereload: true
            },
            css: {
                files: 'less/*.less',
                tasks: ['less'],
            },
            livereload: {
                files: [
                    'examples/*.html',
                    'dist/css/*.css'
                ]
            }
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
                            mountFolder(connect, projectConfig.src + 'examples')
                        ];
                    }
                }
            }
        },
        less: {
            development: {
                options: {
                    paths: ["less/"]
                },
                files: {
                    "dist/css/rcue.css": "less/rcue.less"
                }
            },
            production: {
                options: {
                    paths: ["less/"],
                    cleancss: true
                },
                files: {
                    "dist/css/rcue.min.css": "less/rcue.less"
                }
            }
        }
    });

    grunt.registerTask('server', [
        'connect:server',
        'watch'
    ]);

    grunt.registerTask('build', [
        'less'
    ]);

    grunt.registerTask('default', ['build']);
};
