const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const regeneratorRuntime = require("regenerator-runtime");

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dest'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            }
        ]
    },

    
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};