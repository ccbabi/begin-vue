import { resolve } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import PATHS from './paths'
import win from '../config/window'

export default [
  new HtmlWebpackPlugin({
    path: PATHS.DIST_PATH,
    filename: 'index.html',
    template: resolve(PATHS.SRC_PATH, 'templates/index.ejs'),
    favicon: resolve(PATHS.SRC_PATH, 'assets/imgs/favicon.ico'),
    title: 'begin-vue',
    window: win,
    inject: false,
    minify: {
      removeComments: true
    }
  })
]
