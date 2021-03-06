'use strict';

const sass = require('node-sass');

module.exports = function(grunt) {

    // Load all grunt tasks matching the `grunt-*` pattern
    require('load-grunt-tasks')(grunt);

    // Project configuration - http://gruntjs.com/configuring-tasks
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Directories
            dirs: {
                jekyll:     'jekyll',
                site:       '_site',
                serve:      '_serve',
                assets:     'assets',
                js:         'assets/js',
                bower:      'assets/bower',
                rc:         'run_control'
            },
        // CSS
            // SASS
            sass: {
                dev: {
                    files: [{
                        expand:     true,
                        flatten:    true,
                        cwd:        '<%= dirs.assets %>/scss/',
                        src:        ['*.scss'],
                        dest:       '<%= dirs.serve %>/css/',
                        ext:        '.css'
                    }],
                    options: {
                        implementation:     sass,
                        outputStyle:        'expanded',
                        sourceComments:     true,
                        sourceMap:          true
                    }
                },
                dist: {
                    files: [{
                        expand:     true,
                        flatten:    true,
                        cwd:        '<%= dirs.assets %>/scss/',
                        src:        ['*.scss'],
                        dest:       '<%= dirs.site %>/css/',
                        ext:        '.css',
                    }],
                    options: {
                        implementation:     sass,
                        outputStyle:        'compressed',
                        sourceMap:          false,
                    }
                }
            },
            // Autoprefixing
            autoprefixer: {
                options: {
                  browsers: ['last 2 versions', 'ie 8', 'ie 9']
                },
                dev: {
                    src:    '<%= dirs.serve %>/css/style.css',
                    dest:   '<%= dirs.serve %>/css/style.css'
                },
                dist: {
                    src:    '<%= dirs.site %>/css/style.css',
                    dest:   '<%= dirs.site %>/css/style.css'
                }
            },
            // Linting
            csslint: {
                options: {
                    csslintrc: '<%= dirs.rc %>/.csslintrc'
                },
                files: {
                    src: '<%= dirs.serve %>/**/*.css'
                }
            },
        // JS
            // Concatenation
            concat: {
                options: {
                    separator: ';',
                },
                files: {
                    src:    '<%= dirs.assets %>/js/custom/*.js',
                    dest:   '<%= dirs.assets %>/js/scripts.js'
                }
            },
            // Uglify
            uglify: {
                dev: {
                    files: {
                        '<%= dirs.serve %>/js/scripts.js':  [   '<%= dirs.assets %>/js/scripts.js'  ],
                        '<%= dirs.serve %>/js/vendor.js':   [
                                                                '<%= dirs.assets %>/bower/jquery/dist/jquery.js',
                                                                '<%= dirs.assets %>/bower/vide/dist/jquery.vide.js',
                                                                '<%= dirs.assets %>/bower/picturefill/dist/picturefill.js',
                                                                '<%= dirs.assets %>/bower/smallworld.js/dist/smallworld.min.js',
                                                                '<%= dirs.assets %>/bower/smallworld.js/dist/smallworld.jquery.js',
                                                                '<%= dirs.assets %>/bower/owl.carousel/dist/owl.carousel.js'
                                                            ]
                    }
                },
                dist: {
                    files: {
                        '<%= dirs.site %>/js/scripts.js':   [   '<%= dirs.assets %>/js/scripts.js'  ],
                        '<%= dirs.site %>/js/vendor.js':    [
                                                                '<%= dirs.assets %>/bower/jquery/dist/jquery.js',
                                                                '<%= dirs.assets %>/bower/vide/dist/jquery.vide.js',
                                                                '<%= dirs.assets %>/bower/picturefill/dist/picturefill.js',
                                                                '<%= dirs.assets %>/bower/smallworld.js/dist/smallworld.min.js',
                                                                '<%= dirs.assets %>/bower/smallworld.js/dist/smallworld.jquery.js',
                                                                '<%= dirs.assets %>/bower/owl.carousel/dist/owl.carousel.js'
                                                            ]
                    }
                },
            },
            // Linting
            jshint: {
                options: {
                    // External file
                    jshintrc: '<%= dirs.rc %>/.jshintrc',
                    force: true
                },
                all: ['<%= dirs.assets %>/js/*.js']
            },
        // Images
            // Resize
              // responsive_images: {
              //   work: {
              //     options: {
              //       engine: "im",
              //       sizes: [
              //         {
              //           aspectRatio: false,
              //           rename: false,
              //           width: 1000,
              //           height: 563,
              //           suffix: "-l",
              //           quality: 100
              //         },
              //         {
              //           aspectRatio: false,
              //           rename: false,
              //           width: 650,
              //           height: 366,
              //           suffix: "-m",
              //           quality: 90
              //         },
              //         {
              //           aspectRatio: false,
              //           rename: false,
              //           width: 650,
              //           height: 366,
              //           suffix: "-s",
              //           quality: 90
              //         },
              //         {
              //           aspectRatio: false,
              //           rename: false,
              //           width: 320,
              //           height: 320,
              //           suffix: "-mobile",
              //           quality: 90
              //         },
              //         {
              //           aspectRatio: false,
              //           rename: false,
              //           width: 880,
              //           height: 880,
              //           suffix: "-square",
              //           quality: 95
              //         }
              //       ]
              //     },
              //     files:  [
              //             { expand: true, cwd: '<%= dirs.assets %>/img/', src: '*.jpg', dest: '<%= dirs.serve %>/img/optimised/' }
              //             ]
              //   }
              // },
            // Compression
            imagemin: {
                dist: {
                    options: {
                        progressive: true,
                        optimizationLevel: 7
                    },
                    files:  [
                        { expand: true, cwd: '<%= dirs.site %>/img/', src: '*.{jpeg,jpg}', dest: '<%= dirs.site %>/img/optimised/', ext: '.jpg' },
                        { expand: true, cwd: '<%= dirs.assets %>/video/', src: '*.{jpeg,jpg}', dest: '<%= dirs.site %>/video/', ext: '.jpg' },
                        { expand: true, cwd: '<%= dirs.site %>/img/', src: '*.svg', dest: '<%= dirs.site %>/img/optimised/', ext: '.svg' },
                        { expand: true, cwd: '<%= dirs.site %>/img/', src: '*.png', dest: '<%= dirs.site %>/img/optimised/', ext: '.png' },
                    ]
                },
                dev: {
                    options: {
                        progressive: true,
                        optimizationLevel: 7
                    },
                    files:  [
                        { expand: true, cwd: '<%= dirs.serve %>/img/', src: '*.{jpeg,jpg}', dest: '<%= dirs.serve %>/img/optimised/', ext: '.jpg' },
                        { expand: true, cwd: '<%= dirs.assets %>/video/', src: '*.{jpeg,jpg}', dest: '<%= dirs.serve %>/video/', ext: '.jpg' },
                        { expand: true, cwd: '<%= dirs.serve %>/img/', src: '*.svg', dest: '<%= dirs.serve %>/img/optimised/', ext: '.svg' },
                        { expand: true, cwd: '<%= dirs.serve %>/img/', src: '*.png', dest: '<%= dirs.serve %>/img/optimised/', ext: '.png' },
                    ]
                },               
            },
        // HTML
            // Minification
            htmlmin: {
                dist: {
                    options: {
                        removeComments: true,
                        collapseWhitespace: false
                    },
                    files: [{
                        expand: true,
                        cwd: '<%= dirs.site %>',
                        src: ['**/*.html'],
                        dest: '<%= dirs.site %>',
                        ext: '.html',
                    }]
                }
            },
            // Linting
            htmlhint: {
                options: {
                    htmlhintrc: '<%= dirs.rc %>/.htmlhintrc',
                    force: true
                },
                files: {
                    src: '<%= dirs.site %>/**/*.html'
                }
            },
        // Copying
            copy: {
                map: {
                    files:  [
                            { expand: true, cwd: '<%= dirs.assets %>/bower/smallworld.js/dist/', src: '*.json', dest: '<%= dirs.serve %>/js/' },
                            { expand: true, cwd: '<%= dirs.assets %>/bower/smallworld.js/dist/', src: '*.json', dest: '<%= dirs.site %>/js/' },
                            ],
                },
                fonts: {
                    files:  [
                            { expand: true, cwd: '<%= dirs.assets %>/fonts/', src: ['**'], dest: '<%= dirs.serve %>/fonts/' },
                            { expand: true, cwd: '<%= dirs.assets %>/fonts/', src: ['**'], dest: '<%= dirs.site %>/fonts/' }
                            ],
                },
                video: {
                    files:  [
                            { expand: true, cwd: '<%= dirs.assets %>/video/', src: ['**'], dest: '<%= dirs.serve %>/img/' },
                            { expand: true, cwd: '<%= dirs.assets %>/video/', src: ['**'], dest: '<%= dirs.site %>/img/' },
                            ],
                },
                images_opt: {
                    files:  [
                            { expand: true, cwd: '<%= dirs.assets %>/img/', src: ['**'], dest: '<%= dirs.serve %>/img/' },
                            { expand: true, cwd: '<%= dirs.assets %>/img/', src: ['**'], dest: '<%= dirs.site %>/img/' },
                            ],
                },
            },
        // Tasks
            watch: {
                sass: {
                    files: ['<%= dirs.assets %>/scss/**/*.scss'],
                    tasks: ['sass:dev', 'autoprefixer:dev', 'csslint', 'growl:dev']
                },
                js: {
                    files: ['Gruntfile.js','<%= dirs.assets %>/js/**/*.js'],
                    tasks: ['concat', 'uglify', 'jshint', 'growl:dev']
                },
                images: {
                    files: ['<%= dirs.assets %>/img/**/*.*', '<%= dirs.assets %>/video/**/*.*' ],
                    tasks: ['imagemin', 'growl:dev']
                }
            },
        // Growl notification
            growl: {
                dev: {
                    title:      "Success \u2714",
                    message:    "Development mode - ran using 'develop' task"
                },
                dist: {
                    title:      "Success \u2714",
                    message:    "Build complete - ran using 'build' task"
                }
            }
    });

    grunt.registerTask('develop',   [
                                        'sass:dev',
                                        'autoprefixer:dev',
                                        'concat',
                                        'uglify:dev',
                                        'growl:dev',
                                        'copy',
                                        'newer:imagemin:dev',
                                        'watch'
                                    ]
    );

    grunt.registerTask('build',     [
                                        'newer:htmlmin:dist',
                                        'newer:sass:dist',
                                        'autoprefixer:dist',
                                        'concat',
                                        'uglify:dist',
                                        'copy',
                                        'imagemin:dist',
                                    ]
    );

    // Set the grunt force option
    grunt.option('force', true);

};
