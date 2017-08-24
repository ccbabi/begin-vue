const webpack = require('webpack')
const chalk = require('chalk')
const webpackConfig = require('./webpack/webpack.config.prod')

module.exports = function () {
  webpack(webpackConfig, (err, stats) => {
    if (err) {
      if (err.details) {
        return console.error(chalk.red(err.details))
      }
      return console.error(chalk.red(err.stack || err.message || err))
    }
    if (stats.hasErrors()) {
      const info = stats.toJson()
      return console.error(chalk.red(info.errors))
    }
    console.log(chalk.bgGreen('Complete'))
  })
}
