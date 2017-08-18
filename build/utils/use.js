const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { isProd } = require('../init')

const cssLoader = {
  loader: 'css-loader',
  options: {
    importLoaders: 1,
    sourceMap: isProd,
    minimize: isProd
  }
}

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    sourceMap: isProd
  }
}

module.exports = function (loader, isVue) {
  let fallback = 'style-loader'
  const loaders = [cssLoader, postcssLoader]
  if (loader) {
    loaders.push({
      loader: `${loader}-loader`,
      options: {
        sourceMap: isProd
      }
    })
  }

  if (isVue) {
    fallback = 'vue-style-loader'
  }

  const options = {
    use: loaders,
    fallback
  }

  if (isVue) {
    options.publicPath = '../'
  }

  return ExtractTextPlugin.extract(options)
}
