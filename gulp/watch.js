'use strict';

module.exports = (gulp, plugins, config) => () => {
  gulp.watch(config.paths.sprite, gulp.series('build-sprite'));
  gulp.watch(config.paths.images, gulp.series('copy'));
  gulp.watch(config.paths.styles, gulp.series('build-styles'));
  gulp.watch(config.paths.js, gulp.series('build-js'));
  gulp.watch(config.paths.html, gulp.series('copy'));
};
