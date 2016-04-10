var path = require("path");
var webpack = require("webpack");

//var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    target: 'electron',
    devtool: "source-map",
    entry: {
        mirror: "./src/mirror.js",
    },
    node: {
     fs: "empty"
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        publicPath: "/dist/"
    },
    plugins: [
      new webpack.NoErrorsPlugin(),
      //new webpack.HotModuleReplacementPlugin(),
      
    ],
    resovle: {
        moduleDirectories: ['node_modules']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ["babel-loader"],
            exclude: /node_modules/,
            include: __dirname
        }],
        postLoaders: [
         {
        include: path.resolve(__dirname, 'node_modules/electron-prebuilt'),
        loader: 'transform?brfs'
      }
    ]
    
  }
};
