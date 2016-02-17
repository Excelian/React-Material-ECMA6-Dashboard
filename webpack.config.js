/**
 * Created by kayam.moosa on 25/01/2016.
 */
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
    entry: [APP_DIR + '/index.jsx'],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module : {
        loaders : [
            {
                test: /\.jsx$/,
                loader : 'babel'
            },
            {
                test: /\.css$/, // Only .css files
                loader: 'style!css' // Run both loaders
            }]
    }
};

module.exports = config;