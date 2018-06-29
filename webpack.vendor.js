const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: __dirname,
    resolve: {
        extensions: ['.js', '.css'],
        modules: [__dirname, 'node_modules']
    },
    entry: {
        vendor: [
            'axios',
            'buefy',
            'vue',
            'vue-router'
        ]
    },
    output: {
        filename: '[name].lib.js',
        path: path.resolve(__dirname, './build/lib'),
        library: '[name]_[hash]'
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]_[hash]',
            path: './build/lib/[name].json'
        })
    ]
};