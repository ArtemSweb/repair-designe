const gulp = require('gulp'),
			browserSync   = require('browser-sync');

gulp.task('hello', done => {
	console.log('Привет, мир!');
	done();
});

// Static server
gulp.task('browser-sync', function() {
	browserSync.init({
			server: {
					baseDir: "./"
			}
	});
	gulp.watch("./*.html").on('change', browserSync.reload);
});