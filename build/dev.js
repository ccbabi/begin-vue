const fs = require('fs')
const http = require('http')
const https = require('https')
const { resolve } = require('path')
const express = require('express')
const host = require('./utils/host')
const config = require('./config')
const webpackDevMiddleware = require('./middleware/webpackDevMiddleware')
const webpackHotMiddleware = require('./middleware/webpackHotMiddleware')

let server
const app = express()

app.use(webpackDevMiddleware)
app.use(webpackHotMiddleware)

if (config.https) {
  const options = {
    key: fs.readFileSync(resolve(__dirname, 'ssl/key.pem')),
    ca: fs.readFileSync(resolve(__dirname, 'ssl/csr.pem')),
    cert: fs.readFileSync(resolve(__dirname, 'ssl/cert.pem'))
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
