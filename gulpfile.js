const {src, dest, watch} = require('gulp'),
	browserSync = require('browser-sync'),
	cssmin = require('gulp-minify-css'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass');

// function style() {
// 	return gulp.src(['css/*.css', '!css/*.min.css'])
// 		.pipe(cssmin())
// 		.pipe(rename({
// 			suffix: '.min'
// 		}))
// 		.pipe(gulp.dest('css'));
// };

function bs() {
	servSass();
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});

	watch("./*.html").on('change', browserSync.reload);
	watch("./sass/**/*.sass", servSass);
	watch("./js/*.js").on('change', browserSync.reload);
};

function servSass() {
	return src("./sass/*.sass")
		.pipe(sass())
		.pipe(dest("./css"))
		.pipe(browserSync.stream());
}

exports.serve = bs;