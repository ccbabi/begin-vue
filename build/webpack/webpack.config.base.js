const { SRC_PATH, nearRoot } = require('../utils/abs')
const use = require('../utils/use')
const { isProd } = require('../init')

module.exports = {
  output: {
    path: nearRoot('dist'),
    filename: `js/[name].js?.[${isProd ? 'chunkhash' : 'hash'}:7]`,
    publicPath: ''
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: use('css')
    }, {
      test: /\.less$/,
      use: use('less')
    }, {
      test: /\.styl$/,
      use: use('stylus')
    }, {
      test: /\.js?$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        cssModules: {
          localIdentName: isProd ? '[local]--[hash:base64:7]' : '[hash:base64:7]',
          cameCase: true
        },
        loaders: {
          css: use('css', true),
          less: use('less', true),
          stylus: use('less', true)
        }
      }
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.+)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'images/[name].[ext]?[hash:7]'
        }
      }]
    }, {
      test: /\.(eot|ttf|woff|woff2?)(\?.*)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'font/[name].[ext]?[hash:7]'
        }
      }]
    }]
  },
  resolve: {
    extensions: ['.vue', '.js', '.json', '.styl', '.less', '.css'],
    alias: {
      '@': SRC_PATH
    }
  },
  performance: {
    hints: false
  }
}
