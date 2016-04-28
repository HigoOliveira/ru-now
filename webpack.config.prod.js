var path = require('path');
var webpack = require('webpack');
var OfflinePlugin = require('offline-plugin');

module.exports = {
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false, // ...but do not show warnings in the console (there is a lot of them)
      },
    }),
    new OfflinePlugin({
      // All options are optional
      caches: 'all',
      scope: '/',
      updateStrategy: 'all',
      version: 'v1',

      ServiceWorker: {
        output: 'sw.js'
      },

      AppCache: {
        directory: 'appcache/'
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};
