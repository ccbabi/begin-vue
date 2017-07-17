const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PATHS = require('../config/paths')
const win = require('../config/window')

const plugins = [
  new HtmlWebpackPlugin({
    path: PATHS.DIST_PATH,
    filename: 'index.html',
    template: resolve(PATHS.SRC_PATH, 'templates/index.ejs'),
    favicon: resolve(PATHS.SRC_PATH, 'assets/imgs/favicon.ico'),
    title: '51talk',
    window: win,
    inject: false,
    minify: {
      removeComments: true
    }
  })
]

module.exports = plugins
