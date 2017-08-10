// import Koa from 'koa'
const vm = require('vm')
const Koa = require('koa')

const app = new Koa()

app.use(ctx => {

  console.log(ctx.request.path)
  console.log(ctx.request.method)
  ctx.body = 'hello Koa.'
})

app.listen(3824)
