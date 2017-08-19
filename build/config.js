const fs = require('fs')
const yaml = require('js-yaml')
const portfinder = require('portfinder')
const { nearRoot } = require('./utils/abs')

let doc
const { assign, create } = Object
const cache = create(null)
const isProd = process.env.NODE_ENV === 'production'

portfinder.basePort = 3721

try {
  doc = yaml.safeLoad(fs.readFileSync(nearRoot('snail.config.yml'), 'utf8'))
} catch (err) {
  throw err
}

const config = assign({}, doc)
delete config.port

function getPort (basePort) {
  return portfinder.getPortPromise()
}

async function getDevPort () {
  if (cache.devPort) return Promise.resolve(cache.devPort)

  if (!doc.port) {
    const devPort = await getPort()
    cache.devPort = devPort
    return devPort
  }

  return Promise.resolve(doc.port)
}

async function getMockPort () {
  if (cache.mockPort) return Promise.resolve(cache.mockPort)
  const mockPort = await getPort()
  cache.mockPort = mockPort
  return mockPort
}

module.exports = assign(
  {},
  config,
  {
    getDevPort,
    getMockPort,
    isProd
  }
)
