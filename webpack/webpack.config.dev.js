const webpack = require('webpack')
const PATHS = require('./paths')
const htmlPlugin = require('./htmlPlugin')
const rules = require('./rules')
const commonPlugin = require('./commonPlugin')
const host = require('./host')

module.exports = {
  entry: ['babel-polyfill', PATHS.ENTRY_PATH],
  output: {
    path: PATHS.DIST_PATH,
    filename: 'js/[name].bundle.js'
  },
  module: {
    rules: [].concat(rules)
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ].concat(commonPlugin, htmlPlugin),
  resolve: {
    extensions: ['.vue', '.js', '.json', '.styl', '.less', '.css'],
    modules: [PATHS.SRC_PATH, 'node_modules']
  },
  performance: {
    hints: false
  },
  devtool: 'eval-source-map',
  devServer: {
    host,
    port: 3721,
    contentBase: PATHS.DIST_PATH,
    inline: true,
    hot: true,
    noInfo: true,
    historyApiFallback: true
  }
}
