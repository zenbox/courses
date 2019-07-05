// webpack.config.js
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Fiber = require('fibers');

module.exports = {

    // mode: 'development',
    mode: 'production',

    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: /node_modules/
    },

    entry: './src/index.js',

    module: {
        rules: [{
                test: /\.jsx?$/,
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    // fallback to style-loader in development
                    process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
                // use: [{
                //     loader: 'style-loader' // creates style nodes from JS strings
                // }, {
                //     loader: 'css-loader' //   translates CSS into CommonJS
                // }, {
                //     loader: 'sass-loader', // compiles Sass to CSS, using Node Sass by default
                //     options: {
                //         includePaths: ['./src/sass/'],
                //         fiber: Fiber
                //     }
                // }]
            }
        ]
    },

    resolve: {
        extensions: [
            '.js'
        ]
    },

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/assets/js')
    }
};