const fs = require('fs')
const http = require('http')
const https = require('https')
const { resolve } = require('path')
const express = require('express')
const httpProxyMiddleware = require('http-proxy-middleware')
const host = require('./utils/host')
const { nearRoot } = require('./utils/abs')
const config = require('./config')
const bodyParser = require('body-parser')
const mockMiddleware = require('./middleware/mockMiddleware')
const webpackDevMiddleware = require('./middleware/webpackDevMiddleware')
const webpackHotMiddleware = require('./middleware/webpackHotMiddleware')

let server
const empty = Object.create(null)
const app = express()
const resolveDir = function (dir, pathName) {
  return resolve(dir, pathName)
}.bind(empty, __dirname)

if (config.onOff.static) {
  const {dirname, virtualPath} = config.static
  app.use(virtualPath, express.static(nearRoot(dirname)))
}

if (config.onOff.mock) {
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(mockMiddleware(config.mock.context))
}

if (config.onOff.proxy) {
  const {context, options} = config.proxy
  app.use(context, httpProxyMiddleware(options))
}

app.use(webpackDevMiddleware)
app.use(webpackHotMiddleware)

if (config.server.https) {
  const options = {
    key: fs.readFileSync(resolveDir('ssl/key.pem')),
    ca: fs.readFileSync(resolveDir('ssl/csr.pem')),
    cert: fs.readFileSync(resolveDir('ssl/cert.pem'))
  }
  server = https.createServer(options, app)
} else {
  server = http.createServer(app)
}

async function start (wpkCfg) {
  const devPort = await config.computed.getDevPort()

  server.listen(devPort, host, () => {
    console.log(`Snail: 服务器启动在 ${config.server.https ? 'https' : 'http'}://${host}:${devPort}`)
  })
}

module.exports = function () {
  start().catch(err => console.error(err.stack || err.message || err))
}
