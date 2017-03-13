var gulp = require('gulp');

// Importacao automatica de tasks/etc na pasta ./gulp
require('require-dir')('./gulp');

/**
 * Metodo Responsavel por iniciar as funcoes necessarias para o desenvolvimento
 *
 * @author Diego Campos <diego.campos@zarpsystem.com.br>
 * @since 13/03/2017
*/
gulp.task('init-dev', function () {
    gulp.start('watch-sass');
});