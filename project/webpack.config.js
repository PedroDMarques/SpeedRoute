const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

module.exports = {
	context: __dirname,
	devtool: debug ? "inline-sourcemap" : null,

	entry: {
		landing: path.join(__dirname, 'js', 'landing'),
	},

	module: {
		loaders: [{
			test: /\.js?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015'],
				plugins: [
					["transform-react-jsx", {"pragma":"h"}]
				],
			}
		}]
	},

	output: {
		path: path.join(__dirname, "public", "scripts"),
		filename: "[name].min.js"
	},

	plugins: debug ? [] : [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
	]
}