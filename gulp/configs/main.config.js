module.exports = {
	paths:      {
		styles:       './src/assets/styles',
		stylesBlocks: './src/assets/styles/blocks.scss',
		entry:        './src/assets/js/index.js',
		js:           './src/assets/js/**/*.js',
		vendor:       [
			'./src/assets/vendor/jquery-2.2.3.min.js',
			'./src/assets/vendor/lodash.core.min.js',
			'./src/assets/vendor/**/*.js'
		],
		html:         './src/*.html',
		dist:         './',
		images:       './src/assets/images/**/*',
		sprite:       './src/assets/images/sprite/*',
		fonts:        './src/assets/fonts/**/*'
	},
	build:      {
		js:           'assets/js',
		vendor:       'assets/vendor',
		styles:       'assets/css',
		stylesBlocks: 'src/assets/styles',
		images:       'assets/images',
		sprite:       'assets/images/sprite',
		fonts:        'assets/fonts'
	},
	clean:      './production/',
	production: true
};
