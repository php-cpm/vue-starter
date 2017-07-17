const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const fs = require('fs');
const path = require('path');

// fs.open('./client/app/config/env.js', 'w', function(err, fd) {
//     const buf = 'export default "development";';
//     fs.write(fd, buf, 0, buf.length, 0, function(err, written, buffer) {});
// });

module.exports = merge(webpackBaseConfig, {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://api.example.com',
        changeOrigin: true,
        logLevel: 'debug',
        headers: {
          Cookie: 'mysession=MTQ5ODEwNzc2OXxEdi1CQkFFQ180SUFBUkFCRUFBQUtQLUNBQUVHYzNSeWFXNW5EQW9BQ0hWelpYSnVZVzFsQm5OMGNtbHVad3dJQUFaNmIzVjVhVFk9fOLKnSyF_tXNpdV6JWt98Ufgp4tXXuSL7XjqAko8WvyY; laravel_session=eyJpdiI6Imw3WTJMTWU1Slwvb2dwTzZiV2N5dDFBPT0iLCJ2YWx1ZSI6Im5wdzNla2krRnFvK3UxNGdscWpCamw5UCswQkRJNTF4SUM4aWJKd0tqM1Q2WmwxS1UyWlBOR1k0ZG5HbHJRWGZGeEU1YU5pMjh4YzZUUnpybFZtYll3PT0iLCJtYWMiOiIwYWU4YmQ4OWNkZDFkNWU5MTU3M2ZiNDk4MDBlNDQ0YmIxOTc5Y2M3ZjUxNWFkODhkZjZlZTgxNDNhNTBmMjZlIn0%3D'
        },
        secure: false
      }
    },
    hot: true
  },
  devtool: '#source-map',
  output: {
    
    path: path.resolve(__dirname, 'client'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('dev'),
        'DEBUG': JSON.stringify('*')
      }
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: 'vendors.js'
    })
  ]
});
