const ExtractTextPlugin = require('extract-text-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'

module.exports = [
  {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      use: [
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            sourceMap: true,
            minimize: !isDev
          }
        },
        {
          loader: 'postcss-loader'
        }
      ],
      fallback: 'style-loader'
    })
  },
  {
    test: /\.less$/,
    use: ExtractTextPlugin.extract({
      use: [
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            sourceMap: true,
            minimize: !isDev
          }
        },
        {
          loader: 'postcss-loader'
        },
        {
          loader: 'less-loader',
          options: {
            sourceMap: true
          }
        }
      ],
      fallback: 'style-loader'
    })
  },
  {
    test: /\.styl$/,
    use: ExtractTextPlugin.extract({
      use: [
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            sourceMap: true,
            minimize: !isDev
          }
        },
        {
          loader: 'postcss-loader'
        },
        {
          loader: 'styl-loader',
          options: {
            sourceMap: true
          }
        }
      ],
      fallback: 'style-loader'
    })
  },
  {
    test: /\.js?$/,
    exclude: /node_modules/,
    use: ['babel-loader']
  },
  {
    test: /\.vue$/,
    loader: 'vue-loader',
    options: {
      cssModules: {
        localIdentName: isDev ? '[local]--[hash:base64:7]' : '[hash:base64:7]',
        cameCase: true
      },
      extractCSS: true
    }
  },
  {
    test: /\.(png|jpeg?|gif|svg)(\?.*)?$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  {
    test: /\.(eot|ttf|woff|woff2?)(\?.*)?$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'font/[name].[hash:7].[ext]'
        }
      }
    ]
  }
]
