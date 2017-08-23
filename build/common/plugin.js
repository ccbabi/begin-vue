const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { nearRoot, nearSrc } = require('../utils/abs')
const { env } = require('../config')
const win = require(nearRoot('mock/window'))

module.exports = [
  new HtmlWebpackPlugin({
    path: nearRoot('dist'),
    filename: 'index.html',
    template: nearSrc('templates/index.ejs'),
    favicon: nearSrc('assets/imgs/favicon.ico'),
    title: 'begin-vue',
    window: win,
    inject: false,
    minify: {
      removeComments: env.isProd
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: function (module) {
      return module.context && module.context.indexOf('node_modules') !== -1
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest'
  }),
  new webpack.ProvidePlugin({
  }),
  new ExtractTextPlugin({
    filename: 'css/index.css?[contenthash:7]',
    disable: !env.isProd
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  })
]