const PATHS = require('../config/paths')
const htmlPlugin = require('./htmlPlugin')
const rules = require('./rules')
const commonPlugin = require('./commonPlugin')

module.exports = {
  entry: PATHS.ENTRY_PATH,
  output: {
    path: PATHS.DIST_PATH,
    filename: 'js/[name].bundle.js'
  },
  module: {
    rules: [].concat(rules)
  },
  plugins: [].concat(commonPlugin, htmlPlugin),
  resolve: {
    extensions: ['.js', '.vue', '.json', '.css', '.less', '.styl']
  },
  performance: {
    hints: false
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: PATHS.DIST_PATH
    // noInfo: true
  }
}
