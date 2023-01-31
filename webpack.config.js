const fs = require('fs');
const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { WebpackManifestPlugin } = require("webpack-manifest-plugin")

module.exports = {
  entry: "./main.js",
  devServer: {
    server: {
        type: 'https',
        options: {
            key: fs.readFileSync("../_CertAuth/localhost/localhost.decrypted.key"),
            cert: fs.readFileSync("../_CertAuth/localhost/localhost.crt"),
            ca: fs.readFileSync("../_CertAuth/CA.pem"),
            // requestCert: true,
        },
    },
    },
    plugins: [new HtmlWebpackPlugin({template: './public/index.html'})],
    output: {
    filename: "bundled.[hash].js",
    path: path.resolve(__dirname, "public")
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { "useBuiltIns": "usage", "targets": "defaults" }], "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }
    ]
    },
}

//"sass-loader"