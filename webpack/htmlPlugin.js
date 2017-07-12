const HtmlWebpackPlugin = require('html-webpack-plugin')

const plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    minify: {
      removeComments: true
    }
  })
]

module.exports = plugins
