const { env } = require('./build/config')

module.exports = {
  plugins: [
    require('postcss-cssnext')
  ],
  sourceMap: env.isProd
}
