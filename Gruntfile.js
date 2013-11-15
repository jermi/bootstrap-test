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
        requirejs: {
            compile: {
                options: {
                    baseUrl: "src/main/webapp/js",
                    mainConfigFile: "src/main/webapp/js/config.js",
                    name: "main",
                    out: "src/main/webapp/compressed/script.js",
                    optimize: "uglify",
                    paths: {
                        requirejs: 'lib/require'
                    },
                    include: ["requirejs"],
                    insertRequire: ['main']
                }
            }
        },
        cssmin: {
            options: {
                report: 'min'
            },
            minify: {
                src: ['src/main/webapp/css/bootstrap.css', 'src/main/webapp/css/bootstrap-theme.css', 'src/main/webapp/css/**/*.css'],
                dest: 'src/main/webapp/compressed/style.css'
            }
        },
        env: {
            dev: {
                NODE_ENV: 'DEVELOPMENT'
            },
            prod: {
                NODE_ENV: 'PRODUCTION'
            }
        },
        preprocess : {
            dev : {
                src : 'src/main/webapp/preprocessor_templates/index.html',
                dest : 'src/main/webapp/index.html'
            },
            prod : {
                src : 'src/main/webapp/preprocessor_templates/index.html',
                dest : 'src/main/webapp/index.html'
            }
        },
		sprite:{
			all: {
				src: 'src/main/webapp/**/*.png',
				destImg: 'src/main/webapp/compressed/img.png',
				destCSS: 'src/main/webapp/css/img.css',
			    'algorithm': 'binary-tree',
				'engine': 'gm'
			}
		},
		clean: [
			'src/main/webapp/compressed/img.png', 
			'src/main/webapp/css/img.css'
		]
    });

    // loading tasks from plugins
    grunt.loadNpmTasks('grunt-contrib-uglify'); // js compression
    grunt.loadNpmTasks('grunt-contrib-cssmin'); // css compression
    grunt.loadNpmTasks('grunt-contrib-jshint'); // js validation
    grunt.loadNpmTasks('grunt-env'); // provides ability to set enviromental variables
    grunt.loadNpmTasks('grunt-preprocess'); // processes page to use compressed or not compressed resources
	grunt.loadNpmTasks('grunt-spritesmith');
	grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    // tasks
    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('dev', ['jshint', 'env:dev', 'preprocess:dev']);
    grunt.registerTask('prod', ['jshint', 'env:prod', 'preprocess:prod', 'requirejs:compile', 'cssmin']);
	grunt.registerTask('img', ['clean', 'sprite']);

};