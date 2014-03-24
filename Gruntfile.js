module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {},
			build: {
				src: 'jquery.niceselect.js',
				dest: 'jquery.niceselect.min.js'
			}
		},
		jshint: {
			niceselect: ['jquery.niceselect.js']
		},
		watch: {
			scripts: {
				files: ['*.js'],
				tasks: ['jshint:niceselect', 'uglify'],
				options: {
					spawn: false
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['uglify','jshint:niceselect']);

};