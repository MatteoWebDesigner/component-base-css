var webpack = require('webpack');

module.exports = {
    debug: true,
    devtool: 'source-map',
    entry: "./app/app.js",
    output: {
        path: __dirname + '/build/',
        filename: "app.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css" // this require work
            }
            ,{
                test: /\.js$/,
                loader: 'ng-annotate!babel?presets[]=es2015',
                exclude: '/node_modules/'
            }
        ]
    }, 
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};