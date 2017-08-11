import vm from 'vm'
import fs from 'fs'
import path from 'path'
import Koa from 'koa'
import Mock from 'mockjs'

export default () => {
  const app = new Koa()

  app.use(ctx => {
    const pathName = ctx.request.path.slice(1)

    if (!/^api/.test(pathName)) ctx.throw(404)

    const method = ctx.request.method
    const fileName = pathName.split('/').join('_')
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

  app.listen(3824)
}
