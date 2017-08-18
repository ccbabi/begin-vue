const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { nearRoot, nearSrc } = require('../utils/abs')
const { isProd } = require('../init')
const win = require('../../mock/window')

module.exports = [
  new HtmlWebpackPlugin({
    path: nearRoot('dist'),
    filename: 'index.html',
    template: nearSrc('templates/index.ejs'),
    favicon: nearSrc('assets/imgs/favicon.ico'),
    title: 'begin-vue',
    window: win,
    inject: false,
    minify: {
      removeComments: isProd
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: function (module) {
      return module.context && module.context.indexOf('node_modules') !== -1
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest'
  }),
  new webpack.ProvidePlugin({
  }),
  new ExtractTextPlugin({
    filename: 'css/index.css?.[contenthash:7]',
    disable: !isProd
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  })
]
