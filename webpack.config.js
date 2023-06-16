const path = require('path')

module.exports = {
	entry: './project/src/js/app.js',
	output: {
		path: path.resolve(__dirname, 'build/js'),
		publicPath: '/',
		filename: '[name].js',
		chunkFilename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	externals: {
		jquery: 'jQuery'
	},
	devtool: 'source-map'
}
