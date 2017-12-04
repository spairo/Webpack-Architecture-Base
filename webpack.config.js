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
							use: [
								"style",
								"style-loader",
								"css",
								"css-loader"
							]
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
								test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
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
