// webpack.config.js
// npm run build
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const Fiber = require('fibers');

module.exports = {
    // - - - - -
    // MODE
    // - - - - -
    mode: 'development',
    // mode: 'production',

    // - - - - -
    // WATCH
    // - - - - -
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: /node_modules/
    },

    // - - - - -
    // ENTRY
    // - - - - -
    entry: {
        main: './src/index.ts'
    },

    // - - - - -
    // OUTPUT
    // - - - - -
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    // - - - - -
    // TARGET & EXTERNALS
    // - - - - -
    target: 'node', // update from 23.12.2018
    externals: [nodeExternals()], // update from 23.12.2018
    // - - - - -
    // MODULES
    // - - - - -
    module: {
        rules: [{
                // TYPESCRIPT
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                // SASS
                test: /\.scss$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../css',
                            hmr: process.env.NODE_ENV === 'development'
                        }
                    },
                    {
                        loader: 'css-loader' //   translates CSS into CommonJS
                    },
                    {
                        loader: 'sass-loader', // compiles Sass to CSS, using Node Sass by default
                    }
                ]
            }
        ]
    },

    // - - - - -
    // RESOLVER
    // - - - - -
    resolve: {
        extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.jsx',
            '.scss'
        ]
    },

    // - - - - -
    // WHERE IS THE CONTENT
    // - - - - -
    devServer: {
        contentBase: './dist'
    },

    // - - - - -
    // PLUGINS
    // - - - - -
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
};