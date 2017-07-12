const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = [
  {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      use: {
        loader: 'css-loader',
        options: {
          sourceMap: true
        }
      },
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
            sourceMap: true
          }
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
            sourceMap: true
          }
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
    use: ['vue-loader']
  },
  {
    test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'images/[name].[ext]?[hash:7]'
        }
      }
    ]
  }
]
