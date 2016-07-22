const path = require('path');
const webpack = require('webpack-stream').webpack;

module.exports = {
	devtool: 'cheap-module-inline-source-map',
	entry:   [
		'babel-polyfill',
		'./src/assets/js/index'
	],
	output:  {
		path:          '/assets/js/',
		filename:      '[name].js',
		chunkFilename: '[id].chunk.js',
		publicPath:    '/assets/js/'
	},
	plugins: [
		new webpack.ProvidePlugin({
			$:               "jquery",
			jQuery:          "jquery",
			"window.jQuery": "jquery"
		}),
		new webpack.optimize.CommonsChunkPlugin('bundle', 'bundle.js', Infinity),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module:  {
		preLoaders: [ //добавили ESlint в preloaders
			{
				test:    /\.js$/,
				loaders: [ 'eslint' ],
				include: [
					path.resolve(__dirname, '../../src/assets/js')
				]
			}
		],
		loaders:    [ {
			loaders: [ 'babel-loader' ],
			test:    /\.js$/,
			include: path.join(__dirname, '../../src/assets/js'),
			exclude: /node_modules/,
			plugins: [ 'transform-runtime' ]
		} ]
	},

	resolve: {
		modulesDirectories: [ 'src/assets/js', 'node_modules' ]
	}
};
