const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const cleanWebpackPluginConfig = new CleanWebpackPlugin()

module.exports = {
    mode: "development",
    entry: "/src/index.tsx", // main js
    output: {
        path: path.resolve(__dirname, "dist"), // output folder
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
            },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            },

            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader", // for styles
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html", // base html
        }),
        new NodePolyfillPlugin(),
        cleanWebpackPluginConfig
    ],
    ignoreWarnings: [/Failed to parse source map/],
};
