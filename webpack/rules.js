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
            sourceMap: true
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
            sourceMap: true
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
            sourceMap: true
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
    test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[ext]?[hash:7]'
        }
      }
    ]
  }
]
