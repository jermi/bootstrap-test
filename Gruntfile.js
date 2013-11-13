module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['src/main/webapp/js/**/*.js'],
            options: {
                ignores: ['src/main/webapp/js/jquery-1.10.2.js', 'src/main/webapp/js/bootstrap.js', 'src/main/webapp/js/require.js']
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: ['src/main/webapp/js/jquery-1.10.2.js', 'src/main/webapp/js/bootstrap.js', 'src/main/webapp/js/require.js', 'src/main/webapp/js/*.js'],
                dest: 'src/main/webapp/compressed/script.js'
            }
        },
        cssmin: {
            minify: {
                src: 'src/main/webapp/css/**/*.css',
                dest: 'src/main/webapp/compressed/style.css'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'uglify', 'cssmin']);

};