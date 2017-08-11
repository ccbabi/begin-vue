import fs from 'fs'
import webpack from 'webpack'
import yaml from 'js-yaml'
import PATHS from './paths'
import htmlPlugin from './htmlPlugin'
import rules from './rules'
import commonPlugin from './commonPlugin'
import host from './host'
import mockServer from './mockServer'

const data = fs.readFileSync(PATHS.CONFIG_PATH, 'utf8')
const doc = yaml.safeLoad(data)
const devServer = {
  host,
  port: 3721,
  contentBase: PATHS.DIST_PATH,
  inline: true,
  hot: true,
  noInfo: true,
  historyApiFallback: true
}
let target = `http://${host}:3824`

if (doc.server) {
  target = doc.apiServer
} else {
  mockServer(doc)
}

Object.assign(devServer, {
  proxy: [{
    context: [].concat(doc.apiPrefix),
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
