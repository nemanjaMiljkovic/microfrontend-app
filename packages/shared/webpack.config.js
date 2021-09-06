const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  entry: './dist/index.js',
  cache: false,
  mode: 'development',
  devtool: 'source-map',

  devServer: {
    hot: true,
    port: 3004,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
    historyApiFallback: true,
  },
  optimization: {
    minimize: false,
  },

  output: {
    publicPath: 'http://localhost:3004/',
  },

  resolve: {
    extensions: ['.js', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('@babel/preset-env')],
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'shared',
      filename: 'remoteEntry.js',
      exposes: {
        './Shared': './loader',
      },
      remotes: {},
      shared: [],
    }),
  ],
};
