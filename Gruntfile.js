module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['src/main/webapp/js/**/*.js'],
            options: {
                ignores: [
                    'src/main/webapp/js/lib/**/*.js'
                ]
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                report: 'min'
            },
            build: {
                src: [
                    'src/main/webapp/js/lib/require.js',
                    'src/main/webapp/js/lib/jquery-1.10.2.js',
                    'src/main/webapp/js/lib/bootstrap.js',
                    'src/main/webapp/js/**/*.js',
                    '!src/main/webapp/js/main.js' // AMD entry point
                ],
                dest: 'src/main/webapp/compressed/script.js'
            }
        },
        cssmin: {
            options: {
                report: 'min'
            },
            minify: {
                src: 'src/main/webapp/css/**/*.css',
                dest: 'src/main/webapp/compressed/style.css'
            }
        }
    });

    // loading tasks from plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // tasks
    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('build', ['jshint', 'uglify', 'cssmin']);

};