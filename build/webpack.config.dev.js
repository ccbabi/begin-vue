const webpack = require('webpack')
const merge = require('webpack-merge')
const { nearSrc } = require('./utils/abs')
const commonPlugin = require('./common/plugin')
const wpkBaseCfg = require('./webpack.config.base')

module.exports = merge(wpkBaseCfg, {
  entry: ['babel-polyfill', nearSrc('main.js')],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ].concat(commonPlugin),
  devtool: 'eval-source-map'
})
