const vm = require('vm')
const fs = require('fs')
const path = require('path')
const Koa = require('koa')
const Mock = require('mockjs')

module.exports = (doc, callback = () => {}) => {
  const app = new Koa()
  const rule = [].concat(doc.apiPrefix).join('|')
  const reg = new RegExp(`^(?:${rule})`)

  app.use(ctx => {
    const pathName = ctx.request.path

    if (!reg.test(pathName)) ctx.throw(404)

    const method = ctx.request.method
    const fileName = pathName.split('/').join('_').slice(1)
    const filePath = path.join(__dirname, '../mock', method.toLowerCase(), fileName + '.js')

    if (!fs.existsSync(filePath)) ctx.throw(404)

    try {
      const data = fs.readFileSync(filePath, 'utf8')
      const sandbox = {
        module: {
          exports: {}
        }
      }

      vm.runInNewContext(data, sandbox)

      const sourceData = sandbox.module.exports(ctx.request)
      const mockData = Mock.mock(sourceData)

      ctx.type = 'json'
      ctx.response.body = JSON.stringify(mockData)
    } catch (err) {
      ctx.throw(500)
    }
  })

  app.listen(3824, callback)
}
