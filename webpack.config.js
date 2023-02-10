// import path from 'path'
// import MiniCssExtractPlugin from 'mini-css-extract-plugin'
// import HtmlWebpackPlugin from 'html-webpack-plugin'
// import CleanWebpackPlugin from 'clean-webpack-plugin'
// import WebpackManifestPlugin from 'webpack-manifest-plugin'
// import NodePolyfillPlugin from 'node-polyfill-webpack-plugin'
// import nodeExternals from 'webpack-node-externals'


const currentTask = "build"
const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { WebpackManifestPlugin } = require("webpack-manifest-plugin")
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const config = {
  entry: "./src/App.js",
  target: 'web',
  // externals did not work
  // react-dom/client vs react-dom in App.js
  //externalsPresets: { node: true }, // in order to ignore built-in modules like path, fs, etc.
  //externals: [nodeExternals()],
  output: {
      path: path.resolve(__dirname, "public"),
      filename: "bundled.[fullhash].js",
  },
//   resolve: {

//     fallback: {
//       "fs": false,
//       "path": false,
//       "tls": false,
//       "net": false,
//       "path-browserify": false,
//       "http": require.resolve("stream-http"),
//       "https": require.resolve("https-browserify"),
//       "stream": require.resolve("stream-browserify"),
//       "os": require.resolve("os-browserify"),
//       "zlib": false,
//       "buffer": false,
//       "util": require.resolve("util"),
//       "url": require.resolve("url"),
//       "async_hooks": false,
//       "crypto": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
//   },
// },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'}),
    // new NodePolyfillPlugin(),
  ],
  mode: 'development',
  devServer: {
    port:8080,
    static: path.resolve(__dirname, 'public'),
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  module: {
    // noParse: function (content) {
    //   return /express/.test(content);//
    // },
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