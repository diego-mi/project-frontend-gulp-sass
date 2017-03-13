var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

/**
 * Metodo Responsavel por criar um servidor local sincronizado
 *
 * @author Diego Campos <diego.campos@zarpsystem.com.br>
 * @since 13/03/2017
*/
gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    });

    gulp.watch('src/**/*').on('change', browserSync.reload);
});