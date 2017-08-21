const { env } = require('./config')
require(`./${env.isProd ? 'prod' : 'dev'}`)()

/*
async function startMockServer () {
  const mockPort = await config.getMockPort()
  if (!config.proxy) mockServer({ prefix: config.apiPrefix, port: mockPort, path: nearRoot('mock') })
}
*/
