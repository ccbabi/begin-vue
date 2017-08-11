import fs from 'fs'
import webpack from 'webpack'
import yaml from 'js-yaml'
import PATHS from './paths'
import htmlPlugin from './htmlPlugin'
import rules from './rules'
import commonPlugin from './commonPlugin'
import host from './host'
import mockServer from './mockServer'

let doc = null
try {
  const data = fs.readFileSync(PATHS.CONFIG_PATH, 'utf8')
  doc = yaml.safeLoad(data)
} catch (e) {
  console.log(e)
}

const devServer = {
  host,
  port: 3721,
  contentBase: PATHS.DIST_PATH,
  inline: true,
  hot: true,
  noInfo: true,
  historyApiFallback: true
}

let target = '127.0.0.1:3824'
let prefix = '/api'
if (doc.apiServer.enabled) {
  target = doc.apiServer.host
  prefix = doc.apiServer.prefix
} else {
  mockServer()
}

Object.assign(devServer, {
  proxy: [{
    context: [].concat(prefix),
    target
  }]
})

export default {
  entry: ['babel-polyfill', PATHS.ENTRY_PATH],
  output: {
    path: PATHS.DIST_PATH,
    filename: 'js/[name].bundle.js'
  },
  module: {
    rules: [].concat(rules)
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ].concat(commonPlugin, htmlPlugin),
  resolve: {
    extensions: ['.vue', '.js', '.json', '.styl', '.less', '.css'],
    modules: [PATHS.SRC_PATH, 'node_modules']
  },
  performance: {
    hints: false
  },
  devtool: 'eval-source-map',
  devServer
}
