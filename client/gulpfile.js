var gulp 	= require('gulp');
var gutil = require('gulp-util');
// var size = require('gulp-size');
gulp.task('build', function(){

});

gulp.task('run', function(){

});
gulp.task('default', function() {
	gutil.log('Gulp is running!');
	console.log(gulp.src('app/*'))
	// gulp.start('build');
	// gulp.start('run');
});
