var gulp = require('gulp'),
    clean = require('gulp-clean');

/**
 * Metodo Responsavel por fazer o build do thema
 *
 * @author Diego Campos <diego.campos@zarpsystem.com.br>
 * @since 13/03/2017
 */
gulp.task('build-theme', function () {
    gulp.start('copy', 'css-lint');
});

/**
 * Metodo Responsavel por copiar os arquivos necessarios para gerar o tema
 *
 * @author Diego Campos <diego.campos@zarpsystem.com.br>
 * @since 13/03/2017
 */
gulp.task('copy', ['clean'], function () {
    return gulp.src('src/**/*')
        .pipe(gulp.dest('theme'));
});

/**
 * Metodo Responsavel por apagar o diretorio que sera feito o build do tema
 *
 * @author Diego Campos <diego.campos@zarpsystem.com.br>
 * @since 13/03/2017
 */
gulp.task('clean', function () {
    return gulp.src('theme')
        .pipe(clean());
});