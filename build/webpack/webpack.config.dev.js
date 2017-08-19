const webpack = require('webpack')
const merge = require('webpack-merge')
const { nearSrc } = require('../utils/abs')
const commonPlugin = require('../common/plugin')
const webpackBaseConfig = require('./webpack.config.base')

module.exports = merge(webpackBaseConfig, {
  entry: ['webpack-hot-middleware/client', 'babel-polyfill', nearSrc('main.js')],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ].concat(commonPlugin),
  devtool: 'eval-source-map'
})
