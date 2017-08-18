const fs = require('fs')
const yaml = require('js-yaml')
const portfinder = require('portfinder')
const { nearRoot } = require('../utils/abs')

let doc
const { assign } = Object
const devServerPort = 3721
const mockServerPort = 3824

try {
  doc = yaml.safeLoad(fs.readFileSync(nearRoot('snail.config.yml'), 'utf8'))
} catch (err) {
  throw err
}

const config = assign({}, doc)
delete config.port

function getPort (basePort) {
  portfinder.basePort = basePort
  return portfinder.getPortPromise()
}

async function getDevPort () {
  if (!doc.port) return await getPort(devServerPort)  // eslint-disable-line no-return-await
  return Promise.resolve(doc.port)
}

async function getMockPort () {
  return await getPort(mockServerPort)  // eslint-disable-line no-return-await
}

module.exports = assign(
  {},
  config,
  {
    getDevPort,
    getMockPort
  }
)
