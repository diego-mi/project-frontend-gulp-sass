var gulp = require('gulp'),
    csslint = require('gulp-csslint'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    cssmin = require('gulp-cssmin');

/**
 * Task para compilar o sass
 *
 * @since 13/03/2017
 * @author Diego Campos <diego.campos@zarpsystem.com.br>
 */
gulp.task('sass', function () {
    return gulp.src('src/sass/*.scss')
        .pipe(sourcemaps.init({identityMap: true}))
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(rename({
            basename: 'style',
            suffix: '.min',
            extname: '.css'
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('src/css'));
});

/**
 * Task para assistir mudancas no sass e chamar as funcoes necessarias
 *
 * @since 13/03/2017
 * @author Diego Campos <diego.campos@zarpsystem.com.br>
 */
gulp.task('watch-sass', function () {
    gulp.watch('src/sass/**/*.scss', ['sass']);
});

/**
 * Metodo Responsavel por Verificar o css atras de otimizacoes e erros.
 *
 * @author Diego Campos <diego.campos@zarpsystem.com.br>
 * @since 13/03/2017
 */
gulp.task('css-lint', function () {
    gulp.src('src/css/*.css')
        .pipe(csslint())
        .pipe(csslint.formatter());
});

/**
 * Metodo Responsavel por assistir mudancas no css para chamar a verificacao de otimizacao de css
 *
 * @author Diego Campos <diego.campos@zarpsystem.com.br>
 * @since 13/03/2017
 */
gulp.task('watch-css-lint', function () {
    gulp.watch('src/css/*.css', ['css-lint']);
});