const webpack = require('webpack')
const PATHS = require('./paths')
const htmlPlugin = require('./htmlPlugin')
const rules = require('./rules')
const commonPlugin = require('./commonPlugin')

module.exports = {
  entry: ['babel-polyfill', PATHS.BASE_URL_PATH, PATHS.ENTRY_PATH],
  output: {
    path: PATHS.DIST_PATH,
    filename: 'js/[name].js?.[chunkhash:7]'
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
