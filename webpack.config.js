const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: [
        "webpack/hot/dev-server",
        "webpack-dev-server/client?http://localhost:8080",
        path.resolve(__dirname, "app/main.js")
    ],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    // resolve: {
    //     extensions: [ "", ".js", ".jsx" ]
    // },
    // module: {
    //     loaders: [
    //         { test: /\.js|jsx$/, loaders: ["babel"] },
    //         { test: /\.css$/, loader: "style!css" }
    //     ]
    // },
    plugins: [
        new webpack.BannerPlugin("This is a Library Management system developed by CompileYouth.")
    ]
};
