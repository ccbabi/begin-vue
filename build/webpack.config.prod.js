const webpack = require('webpack')
const merge = require('webpack-merge')
const { nearRoot, nearSrc } = require('./utils/abs')
const commonPlugin = require('./common/plugin')
const wpkBaseCfg = require('./webpack.config.base')

module.exports = merge(wpkBaseCfg, {
  entry: ['babel-polyfill', nearRoot('build/common/publicPath'), nearSrc('main.js')],
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    })
  ].concat(commonPlugin),
  devtool: 'source-map'
})