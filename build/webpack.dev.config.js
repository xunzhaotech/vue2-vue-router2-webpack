var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/main.js'),
        vendors: ['vue', 'vue-router']
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    module: {
        loaders: [{
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.(jpe?g|png|gif|svg|mp3)$/,
                loader: "url",
                query: {
                    name: 'images/[name].[ext]',
                    limit: 1
                }
            },
            {
                test: /\.css$/,
                loader: "vue-style!css"
            },
            {
                test: /\.less$/,
                loader: "vue-style!css!less"
            },
            {
                test: /\.scss/,
                loader: "vue-style!css!sass"
            },
            {
                test: /\.styl/,
                loader: "vue-style!css!stylus"
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.tpl.html'
        })
    ]
}