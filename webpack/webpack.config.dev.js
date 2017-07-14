const webpack = require('webpack')
const PATHS = require('../config/paths')
const htmlPlugin = require('./htmlPlugin')
const rules = require('./rules')
const commonPlugin = require('./commonPlugin')

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
    extensions: ['.js', '.vue', '.json', '.css', '.less', '.styl'],
    modules: [PATHS.SRC_PATH, 'node_modules']
  },
  performance: {
    hints: false
  },
  devtool: 'eval-source-map',
  devServer: {
    // host: '0.0.0.0',
    port: 3721,
    contentBase: PATHS.DIST_PATH,
    inline: true,
    hot: true,
    noInfo: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
        bypass (req, res, proxyOptions) {
          console.log(req.url)
          if (req.headers.accept.indexOf('html') !== -1) {
            console.log('Skipping proxy for browser request.')
            return '/index.html'
          }
        }
      }
    }
  }
}
