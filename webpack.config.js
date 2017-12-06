var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: 'app.bundle.js'
	},
	module: {
		rules: [
			/*
			{
				test: /\.styl$/,
				use: ExtractTextPlugin.extract({
						fallbackLoader: 'style-loader',
						loader: ['css-loader','stylus-loader'],
						publicPath: '/dist'
				})
			},*/
			{
				test: /\.css$/,
				loader: 'css-loader', options: { minimize: false }
			},/*
			{
				test: /\.styl$/,
				loader: 'style-loader!css-loader!stylus-loader'
			},*/
			{
				test: /\.styl$/,
				use: ExtractTextPlugin.extract({
				})
			},
			{
				test: /\.pug$/,
				loader: ['html-loader','pug-html-loader']
			},
			{
				test: /\.(png|jpeg|gif|svg|woff|woff2|ttf|eot|ico)$/,
				loader: 'file-loader?name=assets/[name].[ext]'
			}
		]
	},
	devServer: {
			contentBase: path.join(__dirname, "dist"),
			compress: false,
			stats: "errors-only",
			open: true
	},
	plugins: [
			new HtmlWebpackPlugin({
					hash: true,
					compress: false,
					template: './src/index.pug'
			}),
			new ExtractTextPlugin({
				filename: 'app.css',
				disable: false,
				allChunks: true
			})
	]
}
