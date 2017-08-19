const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const host = require('./utils/host')
const { nearRoot } = require('./utils/abs')
const mockServer = require('./utils/mockServer')
const getDevServer = require('./common/devServer')
const config = require('./config')
const webpackConfig = require(`./webpack.config.${config.isProd ? 'prod' : 'dev'}`)

const { isProd, proxy, apiPrefix } = config

function runWepback (wpkCfg) {
  return new Promise((resolve, reject) => {
    webpack(wpkCfg, (err, stats) => {
      if (err) {
        if (err.details) {
          return reject(err.details)
        }
        return reject(err.stack || err.message || err)
      }
      if (stats.hasErrors()) {
        const info = stats.toJson()
        return reject(info.errors)
      }
      resolve('prod')
    })
  })
}

async function runWebpackDevServer (wpkCfg) {
  const port = await config.getDevPort()
  const devServer = await getDevServer()
  return new Promise((resolve, reject) => {
    const compiler = webpack(wpkCfg)
    const server = new WebpackDevServer(compiler, devServer)
    server.listen(port, `${host}`, () => {
      console.log(`http://${host}:${port}`)
      resolve('dev')
    })
  })
}

async function start () {
  if (isProd) return await runWepback(webpackConfig) // eslint-disable-line no-return-await

  const port = await config.getMockPort()
  if (!proxy) mockServer({ prefix: apiPrefix, port, path: nearRoot('mock') })
  return await runWebpackDevServer(webpackConfig)  // eslint-disable-line no-return-await
}

start()
  .then(env => {
    switch (env) {
      case 'dev':
        // console.log('snail: server start on 127.0.0.1！')
        break
      case 'prod':
        console.log('snail: complete！')
        break
    }
  })
  .catch(err => console.log(err))
