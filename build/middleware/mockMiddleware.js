const fs = require('fs')
const url = require('url')
const path = require('path')
const Mock = require('mockjs')
const vm = require('vm')
const pathToRegexp = require('path-to-regexp')
const { nearRoot } = require('../utils/abs')

module.exports = function (filter) {
  const filterRe = new RegExp(`^${filter}`)
  return function (req, res, next) {
    if (!filterRe.test(req.url)) return next()
    const method = req.method.toLowerCase()
    const { pathname } = url.parse(req.url)
    const mockDir = nearRoot(`mock/${method}`)

    fs.readdir(mockDir, (err, files) => {
      if (err) return next(err)
      const hasFound = files.some(file => {
        const keys = []
        const filePath = path.basename(file, path.extname(file))
        const fileUrl = filePath.replace(/_/g, '/').replace(/@/g, ':')
        const fileRe = pathToRegexp(fileUrl, keys)

        if (fileRe.test(pathname.slice(1))) {
          fs.readFile(path.join(mockDir, file), 'utf8', (err, data) => {
            if (err) return next(err)
            const sandbox = {
              module: {
                exports: {}
              }
            }
            try {
              vm.runInNewContext(data, sandbox)
            } catch (err) {
              return next(err)
            }

            const params = {}
            const values = fileRe.exec(pathname.slice(1))

            keys.forEach((key, i) => {
              params[key.name] = values[i + 1]
            })

            const sourceData = sandbox.module.exports({params, query: req.query, body: req.body})
            const mockData = Mock.mock(sourceData)

            res.json(mockData)
          })
          return true
        }
      })
      if (!hasFound) {
        res.status(404).send('Snail: 没有找到接口文件哦!')
      }
    })
  }
}
