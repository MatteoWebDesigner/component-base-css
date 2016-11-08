var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    debug: true,
    devtool: 'source-map',
    entry: './app/app.js',
    output: {
        path: __dirname + '/build/',
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style'
            }
            ,{
                test: /\.css$/,
                loader: 'css',
                query: {
                    localIdentName: '[local]-[hash:base64:8]',
                    browsers: ["last 2 version", "IE >= 10"],
                    minimize: true,
                    sourceMap: true
                }
            }
            ,{
                test: /\.js$/,
                loader: 'ng-annotate',
                exclude: '/node_modules/'
            }
            ,{
                test: /\.js$/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                },
                exclude: '/node_modules/'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
        // ,new CopyWebpackPlugin(
        //     [
        //         { from: '/app/*.*', to: 'new/' }
        //         ,{ from: 'assets', to: '/', context: '/app/common/' }
        //     ]
        //     ,{
        //         ignore: ['*.js']
        //     }
        // )
    ]
}