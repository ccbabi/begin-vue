const config = require('./config')

const isProd = process.env.NODE_ENV === 'production'

module.exports = Object.assign(
  {},
  config,
  {
    isProd
  }
)
