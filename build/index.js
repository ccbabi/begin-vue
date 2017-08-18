const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const cfg = require('./init')
const getWpkCfg = require(`./webpack/webpack.config.${cfg.isProd ? 'prod' : 'dev'}`)
const mockServer = require('./utils/mockServer')

const { isProd, proxy } = cfg

if (!isProd && !proxy) {
  mockServer(cfg)
}

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

function runWebpackDevServer (wpkCfg) {
  return new Promise((resolve, reject) => {
    const compiler = webpack(wpkCfg)
    const server = new WebpackDevServer(compiler, {
      stats: {
        colors: true
      }
    })
    server.listen(8080, '127.0.0.1', () => {
      resolve('dev')
    })
  })
}

async function start () {
  const wpkCfg = await getWpkCfg()
  if (isProd) {
    return runWepback(wpkCfg)
  }
  return runWebpackDevServer(wpkCfg)
}

start()
  .then(env => {
    switch (env) {
      case 'dev':
        break
      case 'prod':
        break
    }
  })
  .catch(err => console.log(err))
