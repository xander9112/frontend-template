'use strict';

module.exports = (gulp, plugins, config) => () => {
	gulp.src('./data/**/*')
		.pipe(gulp.dest(`./production/data`));

	gulp.src('./*.php')
		.pipe(gulp.dest(`./production`));

	gulp.src('./.htaccess')
		.pipe(gulp.dest(`./production`));

	gulp.src('./templates/**/*')
		.pipe(gulp.dest('./production/templates'));

	return gulp.src('./assets/**/*')
		.pipe(gulp.dest(`./production/assets`));
};
