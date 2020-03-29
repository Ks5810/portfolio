/**
 * prod.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.config');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = merge(common, {
    mode: 'production',
    entry: {
        app: './src/index.js',
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    output: {
        publicPath: '/',
        path: path.resolve('./build'),
        filename: '[name].bundle.js',
    },
    devtool: '',
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new htmlWebpackPlugin({
            inject: false,
            template: require('html-webpack-template'),
            appMountId: 'app',
            headHtmlSnippet:
                '<title>Keisuke Suzuki</title>',
            // googleAnalytics: {
            //     trackingId: 'UA-160643958-1',
            //     pageViewOnLoad: true
            // },
            meta: [
                {
                    charset: 'UTF-8'
                },
                {
                    name: 'name',
                    content: 'portfolio'
                }, {
                    name: 'theme-color',
                    content: "#516296"
                }, {
                    name: 'Description',
                    content: 'My portfolio website',
                }, {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1,' +
                             ' shrink-to-fit=yes',
                }, {
                    name: 'apple-mobile-web-app-capable',
                    content: 'yes'
                }, {
                    name: 'apple-mobile-web-app-status-bar-style',
                    content: 'black'
                }, {
                    name: 'apple-mobile-web-app-title',
                    content: 'Ksuzuki'
                }
            ],
            links: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic'
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '180x180',
                    href: "asset/images/icons/apple-touch-icon.png"
                }, {
                    rel: 'manifest',
                    href: 'manifest.json'
                }
            ],
            mobile: true,
            lang: 'en-US',
            favicon: './src/assets/images/icons/favicon.ico',
            title: 'Keisuke Suzuki',
        }),
    ]
});