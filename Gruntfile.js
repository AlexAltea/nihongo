'use strict';

module.exports = function (grunt) {

    // Load tasks from grunt-* dependencies in package.json
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take
    require('time-grunt')(grunt);

    // Project configuration
    grunt.initConfig({
        yeoman: {
            app: 'app',
            dist: 'dist'
        },
        copy: {
            app: {
                expand: true,
                filter: 'isFile',
                cwd: '<%= yeoman.app %>/',
                src: ['**/*.html', '**/*.jpg'],
                dest: '<%= yeoman.dist %>/'
            }
        },
        wiredep: {
            app: {
                src: ['<%= yeoman.dist %>/index.html']
            }
        },
        cssmin: {
            combine: {
                files: {
                    '<%= yeoman.dist %>/nihongo.css': [
                        '<%= yeoman.app %>/styles/**/*.css'
                    ]
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dist %>',
                    src: '{,*/}*.html',
                    dest: '<%= yeoman.dist %>/'
                }]
            }
        },
        uglify: {
            dist: {
                options: {
                    mangle: false
                },
                files: {
                    '<%= yeoman.dist %>/nihongo.js': [
                        '<%= yeoman.app %>/scripts/**/*.js'
                    ]
                }
            }
        },
        connect: {
            options: {
                port: 9000,
                livereload: 35728,
                hostname: 'localhost',
                base: '<%= yeoman.dist %>'
            },
            livereload: {
                options: {
                    open: true
                }
            }
        },
        watch: {
            scripts: {
                files: '<%= yeoman.app %>/scripts/**/*.js',
                tasks: ['uglify']
            },
            styles: {
                files: '<%= yeoman.app %>/styles/**/*.css',
                tasks: ['cssmin']
            },
            views: {
                files: '<%= yeoman.app %>/**/*.html',
                tasks: ['copy', 'wiredep', 'htmlmin']
            },
            livereload: {
                files: [
                    '<%= yeoman.dist %>/*.html',
                    '<%= yeoman.dist %>/*.js',
                    '<%= yeoman.dist %>/*.css'
                ],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },
        }
    });

    // Project tasks
    grunt.registerTask('test', [
    ]);
    grunt.registerTask('build', [
        'copy',
        'wiredep',
        'cssmin',
        'htmlmin',
        'uglify'
    ]);
    grunt.registerTask('serve', [
        'connect',
        'watch'
    ]);
    grunt.registerTask('default', [
        'test',
        'build',
        'serve'
    ]);
};
