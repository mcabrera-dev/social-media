const { merge } = require("webpack-merge")
const common = require("./webpack.common.ts")
const webpack = require("webpack");

const config = {
    devtool: 'inline-source-map',
    devServer: {
        port: 9001,
        historyApiFallback: true
    },

    plugins: [
        new webpack.DefinePlugin({
            "env.production": JSON.stringify(false),
        })
    ]
}

module.exports = merge(common, config)