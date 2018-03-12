var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: '[name].bundle.js',
		chunkFilename: '[name].js'
	},
	module: {
		rules: [
			{
        test: /.styl$/,
        use: ExtractTextPlugin.extract({fallback: 'style-loader',
          use: ['css-loader', 'stylus-loader']
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
			compress: true,
			stats: "errors-only",
			open: true
	},
	plugins: [
			new HtmlWebpackPlugin({
					hash: true,
					compress: true,
					template: './src/index.pug'
			}),
			new ExtractTextPlugin("app.css"),
	]
}
