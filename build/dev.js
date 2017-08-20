const fs = require('fs')
const http = require('http')
const https = require('https')
const { resolve } = require('path')
const express = require('express')
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

app.use(config.staticRouter, express.static(nearRoot('static')))
if (config.mock) {
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(mockMiddleware(config.apiPrefix))
}
app.use(webpackDevMiddleware)
app.use(webpackHotMiddleware)

if (config.https) {
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
  const devPort = await config.getDevPort()

  server.listen(devPort, host, () => {
    console.log(`Snail: 服务器启动在 ${config.https ? 'https' : 'http'}://${host}:${devPort}`)
  })
}

module.exports = function () {
  start().catch(err => console.err(err.stack || err.message || err))
}
