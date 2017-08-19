const webpack = require('webpack')
const webpackConfig = require('./webpack/webpack.config.prod')

module.exports = function () {
  webpack(webpackConfig, (err, stats) => {
    if (err) {
      if (err.details) {
        return console.err(err.details)
      }
      return console.err(err.stack || err.message || err)
    }
    if (stats.hasErrors()) {
      const info = stats.toJson()
      return console.err(info.errors)
    }
    console.info('Snail: Complete!')
  })
}
