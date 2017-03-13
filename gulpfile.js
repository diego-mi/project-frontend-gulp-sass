var gulp = require('gulp'),
    clean = require('gulp-clean'),
    browserSync = require('browser-sync').create(),
    jshint = require('gulp-jshint'),
    jshintStylish = require('jshint-stylish'),
    csslint = require('gulp-csslint'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('concat'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename');

/************************************
 * INICIO - SASS e CSS
 ************************************/

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

gulp.task('css-lint', function () {
    gulp.src('src/css/*.css')
        .pipe(csslint())
        .pipe(csslint.formatter());
});

/**
 * Task para assistir mudancas no sass e chamar as funcoes necessarias
 *
 * @since 13/03/2017
 * @author Diego Campos <diego.campos@zarpsystem.com.br>
 */
gulp.task('watch-sass', function () {
    gulp.watch('src/sass/**/*.scss',['sass']);
});

/************************************
 * FIM - SASS e CSS
 ************************************/

/************************************
 * INICIO - BUILD THEME
 ************************************/
/**
 * Metodo Responsavel por fazer o build do thema
 *  
 * @author Diego Campos <diego.campos@zarpsystem.com.br>
 * @since 13/03/2017
*/
gulp.task('build-theme', function () {
    gulp.start('copy', 'css-lint');
});

gulp.task('copy', ['clean'], function () {
    return gulp.src('src/**/*')
        .pipe(gulp.dest('theme'));
});

gulp.task('clean', function () {
    return gulp.src('theme')
        .pipe(clean());
});
/************************************
 * FIM - BUILD THEME
 ************************************/


/************************************
 * INICIO - SERVIDOR E SINCRONIZADOR COM O NAVEGADOR
 ************************************/
gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    });

    gulp.watch('src/**/*').on('change', browserSync.reload);
});

/************************************
 * FIM - SERVIDOR E SINCRONIZADOR COM O NAVEGADOR
 ************************************/

/**
 * Task Default - Utilizada para automatizar operacoes de dev
 *
 * @since 13/03/2017
 * @author Diego Campos <diego.campos@zarpsystem.com.br>
 */
gulp.task('default', function () {
    gulp.start('watch-sass');
});