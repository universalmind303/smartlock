const path = require('path')
const webpack = require('webpack')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProvidePlugin = require('webpack/lib/ProvidePlugin')


const APP_DIR = path.resolve(__dirname, 'src')
const BUILD_DIR = path.resolve(__dirname, 'dist')
const ROOT = path.resolve(__dirname, './')

module.exports = {
  entry: {
    '/app': ['babel-polyfill', ROOT + '/index.js'],
    '/vendor': APP_DIR + '/vendor.js'
  },

  output: {
    path: BUILD_DIR,
    filename: '[name].js'
  },

  module: {
    rules:[
      {
        test:/\.(js|jsx)$/ ,
        loader:'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        })
      },
      {
        test: /\.(png|jpg|)$/,
        loader: 'url-loader?limit=200000'
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff' },
      {
        test: /\.(ttf|eot|svg)$/,
        loader: 'file-loader'
      },
    ],

  },
  devServer: {
    contentBase: ROOT,
    hot: true,
    compress: true,
    historyApiFallback: true,
    port: 9000
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['/app', '/vendor']
    }),
    new ExtractTextPlugin({filename: 'style.css'}),
    new ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      'Tether': 'tether',
      'window.Tether': 'tether',
      Tooltip: 'exports-loader?Tooltip!bootstrap/js/dist/tooltip'
    }),
    new HtmlWebpackPlugin({
      template: APP_DIR + '/index.html'
    })
  ]
}
