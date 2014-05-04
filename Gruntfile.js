/**
 * Created by chris on 20/02/2014.
 */

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                drop_console: true,
                compress: true
            },
            files: {
                expand: true,
                flatten: true,
                src: ['app/*.js'],
                dest: 'build/webapps/habmin/app/'
            },
            automation: {
                expand: false,
                flatten: true,
                src: ['app/automation/*.js'],
                dest: 'build/webapps/habmin/app/automation/automation.js'
            },
            config: {
                expand: false,
                flatten: true,
                src: ['app/config/*.js'],
                dest: 'build/webapps/habmin/app/config/config.js'
            },
            graph: {
                expand: false,
                flatten: true,
                src: ['app/graph/*.js'],
                dest: 'build/webapps/habmin/app/graph/graph.js'
            },
            language: {
                expand: false,
                flatten: true,
                src: ['app/language/*.js'],
                dest: 'build/webapps/habmin/app/language/language.js'
            },
            system: {
                expand: false,
                flatten: true,
                src: ['app/system/*.js'],
                dest: 'build/webapps/habmin/app/system/system.js'
            },
            jsfiles: {
                expand: true,
                flatten: true,
                src: ['js/jsprintf.js', 'js/moment.js', 'js/highcharts.js', 'js/highcharts-more.js', 'js/jit.js', 'js/ext-all.js', 'js/jquery.min.js', 'js/jquery.atmosphere.js'],
                dest: 'build/webapps/habmin/js/'
            },
            extuxblockly: {
                expand: true,
                flatten: true,
                src: ['js/extux/blockly/*.js'],
                dest: 'build/webapps/habmin/js/extux/blockly'
            },
            extuxgrid: {
                expand: true,
                flatten: true,
                src: ['js/extux/grid/*.js'],
                dest: 'build/webapps/habmin/js/extux/grid'
            },
            extuxeditor: {
                expand: true,
                flatten: true,
                src: ['js/extux/aceeditor/*.js'],
                dest: 'build/webapps/habmin/js/extux/aceeditor/'
            },
            extuxace: {
                expand: true,
                flatten: true,
                src: ['js/extux/aceeditor/ace/*.js'],
                dest: 'build/webapps/habmin/js/extux/aceeditor/ace/'
            },
            extuxnotification: {
                expand: true,
                flatten: true,
                src: ['js/extux/notification/*.js'],
                dest: 'build/webapps/habmin/js/extux/notification/'
            },
            extuxstatusbar: {
                expand: true,
                flatten: true,
                src: ['js/extux/statusbar/*.js'],
                dest: 'build/webapps/habmin/js/extux/statusbar/'
            }

        },
        copy: {
            images: {
                expand: true,
                src: ['images/**'],
                dest: 'build/webapps/habmin/'
            },
            addons: {
                expand: true,
                src: ['addons/**'],
                dest: 'build/'
            },
            xml: {
                expand: true,
                src: ['openhab/**'],
                dest: 'build/webapps/habmin/'
            },
            language: {
                expand: true,
                src: ['app/language/*.json'],
                dest: 'build/webapps/habmin/'
            },
            resourceimg: {
                expand: true,
                src: ['resources/ext-theme-classic/images/**'],
                dest: 'build/webapps/habmin/'
            },
            statusbar: {
                expand: true,
                src: ['js/extux/statusbar/images/**'],
                dest: 'build/webapps/habmin/'
            },
            blocklymedia: {
                expand: true,
                src: ['js/extux/blockly/media/**'],
                dest: 'build/webapps/habmin/js/extux/blockly/media'
            },
            blocklymsg: {
                expand: true,
                src: ['js/extux/blockly/msg/**'],
                dest: 'build/webapps/habmin/js/extux/blockly/msg'
            }
        },
        cssmin: {
            habmin: {
                expand: true,
                src: ['app/*.css'],
                dest: 'build/webapps/habmin/'
            },
            statusbar: {
                expand: true,
                src: ['js/extux/statusbar/css/*.css'],
                dest: 'build/webapps/habmin/'
            },
            resourcecss: {
                expand: true,
                src: ['resources/css/**/*-all.css'],
                dest: 'build/webapps/habmin/'
            }
        },
        htmlmin: {
            index: {
                expand: true,
                src: ['index.html'],
                dest: 'build/webapps/habmin/'
            },
            chart: {
                expand: true,
                src: ['chart.html'],
                dest: 'build/webapps/habmin/'
            }
        },
        'json-minify': {
            language: {
                files: 'build/webapps/habmin/app/language/*.json'
            },
            blocklymsg: {
                files: 'build/webapps/habmin/js/extjs/blockly/msg/*.json'
            }
        },
        compress: {
            main: {
                options: {
                    mode: 'zip',
                    archive: 'release/habmin.zip'
                },
                expand: true,
                cwd: 'build/',
                src: ['**/*']
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-xmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-json-minify');
    grunt.loadNpmTasks('grunt-contrib-compress');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'copy', 'cssmin', 'htmlmin', 'json-minify', 'compress']);

};
