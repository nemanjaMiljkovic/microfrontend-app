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
    port: 3000,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
    historyApiFallback: true,
  },
  optimization: {
    minimize: false,
  },

  output: {
    publicPath: "http://localhost:3000/",
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
      name: "home",
      filename: "remoteEntry.js",
      exposes: {},
      remotes: {
        login: "login@http://localhost:3001/remoteEntry.js",
        dashboard: "dashboard@http://localhost:3002/remoteEntry.js",
        shared: "shared@http://localhost:3004/remoteEntry.js",
        products: "products@http://localhost:3005/remoteEntry.js",
      },
      shared: [],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
