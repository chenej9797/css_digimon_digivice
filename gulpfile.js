var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

gulp.task('uglify', function(){
	return gulp.src('source/js/ switch.js')
		.pipe(uglify())
		.pipe(gulp.dest('public/javascripts/'))
});

gulp.task('sass', function(){
	return gulp.src('source/scss/style.scss.css')
		.pipe(sass())
		.pipe(gulp.dest('public/stylesheets/'))
});

gulp.task('default',['uglify','sass']);