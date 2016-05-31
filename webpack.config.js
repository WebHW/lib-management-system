const webpack = require("webpack");

module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'}
        ]
    },
    plugins: [
        new webpack.BannerPlugin("This is a Library Management system developed by CompileYouth.")
    ]
};
