const webpack = require('webpack')
const PATHS = require('../config/paths')
const htmlPlugin = require('./htmlPlugin')
const cssRule = require('./cssRule')
const commonPlugin = require('./commonPlugin')

module.exports = {
  entry: PATHS.ENTRY_PATH,
  output: {
    path: PATHS.DIST_PATH,
    filename: 'js/[name]-[chunkhash].js'
  },
  module: {
    rules: [].concat(cssRule)
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    })
  ].concat(commonPlugin, htmlPlugin),
  devtool: 'source-map',
  performance: {
    hints: false
  }
}
