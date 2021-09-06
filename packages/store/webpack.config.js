const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/index",
  cache: false,
  mode: "development",
  devtool: "source-map",

  devServer: {
    hot: true,
    port: 3003,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
  optimization: {
    minimize: false,
  },

  output: {
    publicPath: "http://localhost:3003/",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("@babel/preset-env")],
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "store",
      filename: "remoteEntry.js",
      exposes: {
        "./Store": "./src/index.js",
      },
      remotes: {},
      shared: [],
    }),
  ],
};
