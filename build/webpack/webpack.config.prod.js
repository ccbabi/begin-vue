const webpack = require('webpack')
const merge = require('webpack-merge')
const wpkBaseCfg = require('./webpack.config.base')
const { nearRoot, nearSrc } = require('../utils/abs')
const commonPlugin = require('../utils/commonPlugin')

const wpkCfg = merge(wpkBaseCfg, {
  entry: ['babel-polyfill', nearRoot('build/entry/publicPath'), nearSrc('main.js')],
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

module.exports = function () {
  return Promise.resolve(wpkCfg)
}
