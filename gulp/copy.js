'use strict';

module.exports = (gulp, plugins, config) => () => {
	gulp.src(config.paths.images)
		.pipe(gulp.dest(`${config.paths.dist}/${config.build.images}`));

	return gulp.src(config.paths.fonts)
		.pipe(gulp.dest(`${config.paths.dist}/${config.build.fonts}`));
};
