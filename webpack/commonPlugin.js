const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = [
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
    $: 'jquery'
  }),
  new ExtractTextPlugin({
    filename: 'css/[name]-[contenthash].css',
    disable: process.env.NODE_ENV === 'development'
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  })
]
