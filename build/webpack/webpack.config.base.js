const { src, nearRoot } = require('../utils/abs')
const use = require('../common/use')
const { env } = require('../config')

let filename

if (env.isProd) {
  // filename = 'js/[name].[chunkhash:7].js'
  filename = 'js/[name].js'
} else {
  filename = 'js/[name].[hash:7]'
}

module.exports = {
  output: {
    path: nearRoot('dist'),
    filename: filename,
    chunkFilename: 'js/[name].[chunkhash:7].js',
    publicPath: ''
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: use('')
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
        loaders: {
          css: use('', true),
          less: use('less', true),
          stylus: use('stylus', true)
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
      '@': src
    }
  },
  performance: {
    hints: false
  }
}
