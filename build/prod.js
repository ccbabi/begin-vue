const webpack = require('webpack')
const webpackConfig = require('./webpack/webpack.config.prod')

module.exports = function () {
  webpack(webpackConfig, (err, stats) => {
    if (err) {
      if (err.details) {
        return console.error(err.details)
      }
      return console.error(err.stack || err.message || err)
    }
    if (stats.hasErrors()) {
      const info = stats.toJson()
      return console.error(info.errors)
    }
    console.info('Snail: Complete!')
  })
}
