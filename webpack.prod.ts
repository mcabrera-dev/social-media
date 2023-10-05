const commonprod = require("./webpack.common.ts")
const webpack = require("webpack");
import merge from "webpack-merge"

const configprod = {
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            "env.production": JSON.stringify(true),
        })
    ]
}

module.exports = merge(commonprod, configprod)