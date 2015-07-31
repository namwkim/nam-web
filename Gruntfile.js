module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
		    options: {
		      	stripBanners: true,
		      	banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n',
		    },
			controller:{
				src: 'namapp/static/js/ng/src/controllers/*.js',
				dest: 'namapp/static/js/ng/dist/controller.js'
			},
			service:{
				src: 'namapp/static/js/ng/src/services/*.js',
				dest: 'namapp/static/js/ng/dist/service.js'
			},
			directive:{
				src: 'namapp/static/js/ng/src/directives/*.js',
				dest: 'namapp/static/js/ng/dist/directive.js'
			},
			app:{
				src: 'namapp/static/js/ng/src/app.js',
				dest: 'namapp/static/js/ng/dist/app.js'
			}
		},
		uglify: {
		    options: {
	    		stripBanners: true,
		      	banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n',
		    },
		    controller: {
		      src: 'namapp/static/js/ng/dist/controller.js',
		      dest: 'namapp/static/js/ng/dist/controller.min.js'
		    },
		    service: {
		      src: 'namapp/static/js/ng/dist/service.js',
		      dest: 'namapp/static/js/ng/dist/service.min.js'
		    },
		    service: {
		      src: 'namapp/static/js/ng/dist/directive.js',
		      dest: 'namapp/static/js/ng/dist/directive.min.js'
		    },
		    app: {
		      src: 'namapp/static/js/ng/dist/app.js',
		      dest: 'namapp/static/js/ng/dist/app.min.js'
		    }
  		},  		
		bower: {
			update:{
				options:{
					targetDir: 'namapp/static/bower_components',
					layout: 'byComponent',
					cleanBowerDir: true,
					cleanTargetDir: true
				}
			} 
		},
		watch: {
		  scripts: {
		    files: ['namapp/static/js/ng/src/**/*.js'],
		    tasks: ['concat', 'uglify'],
		    options:{
		    	spawn: true
		    }
		  }
		},
	    devUpdate: {
	        main: {
	            options: {	               
	                packages: {
	                    devDependencies: true//, //only check for devDependencies 
	                    // dependencies: true
	                }
	            }
	        }
	    },
	    shell:{
	    	flask:{
	    		command: "python run.py"
	    	}
	    },
	    concurrent: {
	        target: {
	            tasks: ['watch', 'shell'],//, 'supervisor'],
	            options: {
	                logConcurrentOutput: true
	            }
	        }
	    }


	});


	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-bower-task');
	// grunt.loadNpmTasks('grunt-supervisor');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-dev-update');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-shell');

	grunt.registerTask('build', ['devUpdate', 'bower', 'concat', 'uglify']);
	grunt.registerTask('run', ['concurrent']);
	grunt.registerTask('default', ['concurrent']);

};