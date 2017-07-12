const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  loaders: {
    css: ExtractTextPlugin.extract()
  }
}
