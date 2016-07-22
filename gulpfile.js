'use strict';

const rimraf = require('rimraf');
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const config = require('./gulp/configs/main.config');
const register = require(`./gulp/utils/register`);

register(gulp, plugins, config)([
	'build-vendor',
	'build-js',
	'build-sprite',
	'build-styles',
	'build-prod',
	'copy',
	'serve',
	'watch'
]);

gulp.task('clean', function (callback) {
	rimraf('./production.zip', callback);

	return rimraf(config.clean, callback);
});

gulp.task('zip-production', function (callback) {
	return gulp.src([ './production/**/*', './production/**/.*' ])
		.pipe(plugins.zip('production.zip'))
		.pipe(gulp.dest('./'));
});

gulp.task('build', gulp.parallel('build-vendor', 'build-js', 'build-sprite', 'build-styles', 'copy'));
gulp.task('prod', gulp.series('build-prod', gulp.parallel('zip-production')));
gulp.task('default', gulp.series('build', gulp.parallel('watch', 'serve')));
