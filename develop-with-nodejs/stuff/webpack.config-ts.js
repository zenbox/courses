const path = require('path');

module.exports = {
    mode: 'development',

    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: /node_modules/
    },

    entry: './src/index.ts',

    module: {
        rules: [{
            test: [
                /\.tsx?$/,
                /\.css$/
            ],
            use: [
                'ts-loader',
                'css-loader'
            ],
            exclude: /node_modules/
        }]
    },

    resolve: {
        extensions: [
            '.tsx',
            '.ts',
            '.js'
        ]
    },

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/assets/js')
    }
};