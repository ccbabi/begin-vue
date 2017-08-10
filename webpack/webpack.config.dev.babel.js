import webpack from 'webpack'
import PATHS from './paths'
import htmlPlugin from './htmlPlugin'
import rules from './rules'
import commonPlugin from './commonPlugin'
import host from './host'

import './mock'

export default {
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
