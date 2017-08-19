const express = require('express')
const host = require('./utils/host')
const config = require('./config')
const webpackDevMiddleware = require('./middleware/webpackDevMiddleware')
const webpackHotMiddleware = require('./middleware/webpackHotMiddleware')

const app = express()

async function start (wpkCfg) {
  const devPort = await config.getDevPort()

  app.use(webpackDevMiddleware)
  app.use(webpackHotMiddleware)

  app.listen(devPort, host, () => {
    console.log(`Snail: 服务器启动在 http://${host}:${devPort}`)
  })
}

module.exports = function () {
  start().catch(err => console.err(err.stack || err.message || err))
}
