const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve (dir) {
    return path.join(__dirname, 'client/app', dir)
}

module.exports = {
    entry: {
        main: './client/app/main',
        vendors: './client/app/vendors'
    },
    output: {
        path: path.join(__dirname, './dist')
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {

                        sass: ExtractTextPlugin.extract({
                            use: ['css-loader?minimize', 'autoprefixer-loader', 'sass-loader'],
                            fallback: 'vue-style-loader'
                        }),

                        css: ExtractTextPlugin.extract({
                            use: ['css-loader', 'autoprefixer-loader'],
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            },
            {
                test: /iview\/.*?js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader?minimize', 'autoprefixer-loader'],
                    fallback: 'style-loader'
                })
            },

            {
                test: /\.sass/,
                use: ExtractTextPlugin.extract({
                    use: ['autoprefixer-loader', 'sass-loader'],
                    fallback: 'style-loader'
                })
            },

            {
                test: /\.(gif|jpg|png|jpeg)\??.*$/,
                loader: 'file-loader?name=assets/img/img-[hash].[ext]'
            },
    
            {
                test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
                loader: 'file-loader?name=assets/font/[name].[ext]'
            },
            {
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'assets': resolve('assets'),
            'components': resolve('components')
        }
    },
    
    plugins: [
    
        new HtmlWebpackPlugin({
            template: './client/app/template/index.ejs',
            inject: 'body',
            hash: true
        }),
    ]
};