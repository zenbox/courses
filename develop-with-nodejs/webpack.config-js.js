// webpack.config.js
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Fiber = require('fibers');

module.exports = {
    // - - - - -
    // MODE
    // - - - - -
    // mode: 'development',
    mode: 'production',

    // - - - - -
    // PLUGINS
    // - - - - -
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],

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
    entry: './src/index.js',

    // - - - - -
    // MODULES
    // - - - - -
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