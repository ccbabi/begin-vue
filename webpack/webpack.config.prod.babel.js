import webpack from 'webpack'
import PATHS from './paths'
import htmlPlugin from './htmlPlugin'
import rules from './rules'
import commonPlugin from './commonPlugin'

export default {
  entry: ['babel-polyfill', PATHS.BASE_URL_PATH, PATHS.ENTRY_PATH],
  output: {
    path: PATHS.DIST_PATH,
    filename: 'js/[name].js?[chunkhash:7]'
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
