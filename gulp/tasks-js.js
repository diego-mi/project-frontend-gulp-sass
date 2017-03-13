var gulp = require('gulp');
var concat = require('concat');
var uglify = require('gulp-uglify');
var jshint = require('jshint');
var jshintStylish = require('jshint-stylish');

gulp.task('js-min', function () {
    gulp.src('src/js-development/**/*.js')
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js/'));
});

gulp.task('watch-js-min', function () {
    gulp.watch('src/js-development/**/*.js', ['js-min']);
});

gulp.task('js-hint', function () {
    gulp.watch('src/js/**/*.js').on('change', function (event) {
        console.log("Linting " + event.path);
        gulp.src(event.path)
            .pipe(jshint())
            .pipe(jshint.reporter(jshintStylish));
    });
});

gulp.task('watch-js-hint', function () {
    gulp.watch('src/js-development/**/*.js', ['js-hint']);
});