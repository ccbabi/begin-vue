const webpack = require('webpack')
const PATHS = require('../config/paths')
const htmlPlugin = require('./htmlPlugin')
const rules = require('./rules')
const commonPlugin = require('./commonPlugin')

module.exports = {
  entry: PATHS.ENTRY_PATH,
  output: {
    path: PATHS.DIST_PATH,
    filename: 'js/[name]-[chunkhash:7].js'
  },
  module: {
    rules: [].concat(rules)
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    })
  ].concat(commonPlugin, htmlPlugin),
  resolve: {
    extensions: ['.vue', '.js', '.json', '.styl', '.less', '.css'],
    modules: [PATHS.SRC_PATH, 'node_modules']
  },
  devtool: 'source-map',
  performance: {
    hints: false
  }
}
