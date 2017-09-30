const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { env } = require('../config')

const cssLoader = {
  loader: 'css-loader',
  options: {
    importLoaders: 1,
    sourceMap: env.isProd,
    minimize: env.isProd
  }
}

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    // warning
    sourceMap: true
  }
}

module.exports = function (loader, isVue) {
  let fallback = 'style-loader'
  const loaders = [cssLoader, postcssLoader]

  if (loader) {
    loaders.push({
      loader: `${loader}-loader`,
      options: {
        sourceMap: env.isProd
      }
    })
  }

  if (isVue) {
    fallback = 'vue-style-loader'
  }

  const options = {
    fallback,
    use: loaders
  }

  if (isVue) {
    options.publicPath = '../'
  }

  return ExtractTextPlugin.extract(options)
}
