<<<<<<< HEAD
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
            {
                test: /\.styl$/,
                use: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: ['css-loader','stylus-loader'],
                    publicPath: '/dist'
                })
            },
            {
                test: /\.pug$/,
                loader: ['html-loader','pug-html-loader'],
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
            title: 'Project Base',
            // minify: {
            //     collapseWhitespace: true
            // },
            hash: true,
            template: './src/index.pug', // Load a custom template (ejs by default see the FAQ for details)
        }),
        new ExtractTextPlugin({
            filename: 'app.css',
            disable: false,
            allChunks: true
        })
    ]
}
=======
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var stylusLoader = ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader");

module.exports = {
    entry: "./index.js",
    output: {
        path: "./dist",
        filename: "[name].js"
    },
    module: {
        loaders: [{
            test: /\.styl$/,
            loader: stylusLoader
        }]
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ]
};
>>>>>>> 1dfef79de8683d079aa8de66b7aa147055e603da
