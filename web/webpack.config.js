var path = require('path');
var webpack = require('webpack');
var HtmlPlugin = require('webpack-html-plugin');
var HasteResolverPlugin = require('haste-resolver-webpack-plugin');

var IP = '0.0.0.0';
var PORT = 3000;
var ROOT_PATH = path.resolve(__dirname, '..');

var isProd = process.env.NODE_ENV === 'production';

var config = {
  paths: {
    src: path.join(ROOT_PATH, '.'),
    index: path.join(ROOT_PATH, 'index.web'),
  },
};

module.exports = {
  ip: IP,
  port: PORT,
  devtool: 'source-map',
  resolve: {
    alias: {
      'react-native': 'react-web',
      'ReactNativeART': 'react-art',
      'react-native-linear-gradient': path.join(ROOT_PATH, 'vendor/react-native-linear-gradient/index.web'),
      'react-native-scrollable-tab-view': path.join(ROOT_PATH, 'vendor/react-native-scrollable-tab-view/index'),
      'react-native-vector-icons': path.join(ROOT_PATH, 'vendor/react-native-vector-icons'),
    },
    extensions: ['', '.js', '.jsx'],
  },
  entry: isProd ? [config.paths.index] : [
    'webpack-dev-server/client?http://' + IP + ':' + PORT,
    // 'webpack/hot/only-dev-server',
    config.paths.index,
  ],
  output: {
    path: path.join(__dirname, 'output'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.js?$/,
        loaders: isProd ? ['babel'] : ['react-hot', 'babel'],
        // include: [config.paths.src],
        // exclude: [/node_modules/]
      },
    ]
  },
  plugins: [
    new HasteResolverPlugin({
      platform: 'web',
      nodeModules: ['react-web']
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(isProd ? 'production' : 'development'),
      }
    }),
    new webpack.NoErrorsPlugin(),
    new HtmlPlugin(),
  ]//.concat(isProd ? [] : [new webpack.HotModuleReplacementPlugin(),])
};
