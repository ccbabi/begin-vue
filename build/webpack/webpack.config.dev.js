const webpack = require('webpack')
const merge = require('webpack-merge')
const wpkBaseCfg = require('./webpack.config.base')
const cfg = require('../init')
const { nearRoot, nearSrc } = require('../utils/abs')
const host = require('../utils/host')
const commonPlugin = require('../utils/commonPlugin')

const wpkCfg = merge(wpkBaseCfg, {
  entry: ['babel-polyfill', nearSrc('main.js')],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ].concat(commonPlugin),
  devtool: 'eval-source-map'
})

const devServer = {
  host,
  contentBase: nearRoot('dist'),
  inline: true,
  hot: true,
  noInfo: true,
  open: true,
  historyApiFallback: true
}

module.exports = async function () {
  const devPort = await cfg.getDevPort()
  const mockPort = await cfg.getMockPort()
  let target = `http://${cfg.host}:${mockPort}`

  devServer.port = devPort
  if (cfg.proxy) {
    target = cfg.proxyServer
  }

  devServer.proxy = [{
    context: cfg.apiPrefix,
    target
  }]

  wpkCfg.devServer = devServer

  return wpkCfg
}
