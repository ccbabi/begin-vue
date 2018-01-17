const { src, nearRoot } = require('../utils/abs')
const use = require('../common/use')
// const { env } = require('../config')

/*
let filename

if (env.isProd) {
  filename = 'js/[name].js'
} else {
  filename = 'js/[name].[hash:7].js'
}
*/

module.exports = {
  output: {
    path: nearRoot('dist'),
    filename: 'js/[name].js',
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
        },
        transformToRequire: {
          audio: 'src',
          video: 'src',
          source: 'src'
        }
      }
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.+)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'images/[name].[hash:7].[ext]'
        }
      }, {
        loader: 'image-webpack-loader',
        options: {
          gifsicle: {
            interlaced: false
          },
          optipng: {
            optimizationLevel: 7
          },
          pngquant: {
            quality: '65-90',
            speed: 4
          },
          mozjpeg: {
            progressive: true,
            quality: 65
          },
          webp: {
            quality: 75
          }
        }
      }]
    }, {
      test: /\.(eot|ttf|woff|woff2?)(\?.*)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'font/[name].[hash:7].[ext]'
        }
      }]
    }, {
      test: /\.(mp3|mp4|ogg|wav)(\?.*)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'av/[name].[hash:7].[ext]'
        }
      }]
    }]
  },
  resolve: {
    extensions: ['.vue', '.js', '.json', '.styl', '.less', '.css'],
    alias: {
      '@': src,
      vue: 'vue/dist/vue.js'
    }
  },
  performance: {
    hints: false
  }
}
