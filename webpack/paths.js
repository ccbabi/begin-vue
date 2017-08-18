import { resolve } from 'path'

const ROOT_PATH = process.cwd()
const NODE_MODULES_PATH = resolve(ROOT_PATH, 'node_modules')
const DIST_PATH = resolve(ROOT_PATH, 'dist')
const SRC_PATH = resolve(ROOT_PATH, 'src')
const ENTRY_PATH = resolve(ROOT_PATH, 'src', 'main.js')
const BASE_URL_PATH = resolve(__dirname, 'getBasePath')
const CONFIG_PATH = resolve(ROOT_PATH, 'snail.config.yml')

export default {
  ROOT_PATH,
  NODE_MODULES_PATH,
  DIST_PATH,
  SRC_PATH,
  ENTRY_PATH,
  BASE_URL_PATH,
  CONFIG_PATH
}
