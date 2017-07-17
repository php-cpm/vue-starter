const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const fs = require('fs');
const path = require('path');

fs.open('./client/app/config/env.js', 'w', function(err, fd) {
    const buf = 'export default "production";';
    fs.write(fd, buf, 0, buf.length, 0, function(err, written, buffer) {});
});

module.exports = merge(webpackBaseConfig, {
    output: {
        publicPath: '',
        filename: 'assets/js/[name].[chunkhash].js',
        path: path.resolve(__dirname, 'output'),
        chunkFilename: 'assets/js/[name].[chunkhash].chunk.js'
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].[chunkhash].css',
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'assets/js/vendors.[chunkhash].js'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                drop_console: true,
                warnings: false
            }
        })
    ]
});
