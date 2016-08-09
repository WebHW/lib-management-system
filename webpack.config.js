"use strict";

const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: path.resolve("./src"),
    entry: {
        "vendor": [ "react", "react-dom", "redux", "react-redux" ],
        "index": [ "./index.js" ]
    },
    output: {
        path: path.resolve("./public/assets"),
        publicPath: "/assets/",
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loaders: [
                    "babel-loader?sourceRoot=./src"
                ]
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            },
            {
                test: /\.(png|jpg)$/,
                loader: "file-loader?name=[path][name]_[hash].[ext]"
            }
        ]
    },
    resolve: {
        root: path.resolve("./"),
        alias: {
            mb: path.resolve("./src/lms")
        }
    },
    plugins: [

    ],

    devServer: {
        contentBase: "./public"
    }
};
