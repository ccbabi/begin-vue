const { nearRoot } = require('../utils/abs')

module.exports = {
  publicPath: '',
  contentBase: nearRoot('dist'),
  inline: true,
  hot: true,
  noInfo: true,
  historyApiFallback: true,
  stats: {
    colors: true
  },
  lazy: false,
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  }
}
