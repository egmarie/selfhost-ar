const fs = require('fs');
const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { WebpackManifestPlugin } = require("webpack-manifest-plugin")
const currentTask = process.env.STATUS

const config = {
  entry: "./server.js",
  output: {
      path: path.resolve(__dirname, "public"),
      filename: "bundled.[fullhash].js",
  },
  resolve: {
  fallback: {
    "fs": false,
    "tls": false,
    "path": false,
    "path-browserify": false,
    "http": require.resolve("stream-http"),
    "net": false,
    "zlib": false,
    "stream": false,
    "crypto": false,
    "buffer": false,
    "util": false,
    "url": require.resolve("url/"),
    "async_hooks": false,
    "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
  } ,
},
  plugins: [new HtmlWebpackPlugin({template: './src/index.html'})],
  mode: 'production',
  devServer: {
    port:8080,
    static: path.resolve(__dirname, 'dist'),
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
  },
},
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { "useBuiltIns": "usage", "corejs": 3, "targets": "defaults" }], "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    },
    {
      test: /\.(glb|gltf)$/,
      type: 'asset/resource',

    },
    ]
    },
}

if (currentTask == "build") {
  config.mode = "production"
  config.module.rules[0].use[0] = MiniCssExtractPlugin.loader
  config.plugins.push(new MiniCssExtractPlugin({ filename: "main.[hash].css" }), new CleanWebpackPlugin(), new WebpackManifestPlugin())
}

module.exports = config