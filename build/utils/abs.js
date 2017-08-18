const { resolve } = require('path')

const ROOT_PATH = process.cwd()
const SRC_PATH = resolve(ROOT_PATH, 'src')
const EMPTY = Object.create(null)

function absPath (root, pathName) {
  return resolve(root, pathName)
}

module.exports = {
  ROOT_PATH,
  SRC_PATH,
  nearRoot: absPath.bind(EMPTY, ROOT_PATH),
  nearSrc: absPath.bind(EMPTY, SRC_PATH)
}
