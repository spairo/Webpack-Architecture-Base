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
			},
			test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
			{
				test: /\.css$/,
				loader: 'css-loader', options: { minimize: false }
			},

			https://blog.angularindepth.com/this-is-how-angular-cli-webpack-delivers-your-css-styles-to-the-client-d4adf15c4975
			*/
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: 'css-loader',
					fallback: 'style-loader'
				})
			},
			{
				test: /\.styl$/,
				loader: 'style-loader!css-loader!stylus-loader'
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
			compress: true,
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
