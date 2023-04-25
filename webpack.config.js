const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "build"),
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: "ts-loader"
            }
        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'static' }
            ]
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "build"),
        },
        port: 3000,
    }
};
