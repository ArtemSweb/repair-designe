const gulp 					= require('gulp'),
			browserSync   = require('browser-sync'),
			cssmin 				= require('gulp-minify-css'),
			rename  			= require('gulp-rename'); 

gulp.task('style', function () {
	return gulp.src(['css/*.css', '!css/*.min.css'])
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('css'));
});

gulp.task('browser-sync', function() {
	browserSync.init({
			server: {
					baseDir: "./"
			}
	});

	gulp.watch("./*.html").on('change', browserSync.reload);
	gulp.watch("./css/*.css").on('change', browserSync.reload);
});


