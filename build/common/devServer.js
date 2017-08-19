const config = require('../config')
const { nearRoot } = require('../utils/abs')
const host = require('../utils/host')

const devServer = {
  contentBase: nearRoot('dist'),
  inline: true,
  hot: true,
  noInfo: true,
  open: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}

module.exports = async function () {
  const mockPort = await config.getMockPort()
  let target = `http://${host}:${mockPort}`

  if (config.proxy) {
    target = config.proxyServer
  }

  devServer.proxy = [{
    context: config.apiPrefix,
    target
  }]

  return devServer
}
