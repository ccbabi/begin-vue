// const vm = require('vm')
const fs = require('fs')
const path = require('path')
const Koa = require('koa')

const app = new Koa()

app.use(ctx => {
  const pathName = ctx.request.path
  const method = ctx.request.method
  if (!/^\/api/.test(pathName)) return
  console.log(pathName)
  console.log(method)
  // const filePath = join(__dirname, '../mock', method.toLowerCase, path, '.js')
  // console.log(filePath)
  /*
  if (!fs.existsSync(filePath)) ctx.throw(404)
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) ctx.throw(500)
    console.log(data)
  }) */
  ctx.body = 'hello Koa.'
})

app.listen(3824)
