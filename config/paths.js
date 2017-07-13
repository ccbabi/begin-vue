const { resolve } = require('path')

const ROOT_PATH = process.cwd()
const NODE_MODULES_PATH = resolve(ROOT_PATH, 'node_modules')
const DIST_PATH = resolve(ROOT_PATH, 'dist')
const SRC_PATH = resolve(ROOT_PATH, 'src')
const ENTRY_PATH = resolve(ROOT_PATH, 'src', 'index.js')

module.exports = {
  ROOT_PATH,
  NODE_MODULES_PATH,
  DIST_PATH,
  SRC_PATH,
  ENTRY_PATH
}