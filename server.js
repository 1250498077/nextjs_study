const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')
const session = require('koa-session');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  // 用于加密的字符串，随便写
  server.keys = ['Jokey develop Github App'];
  const SESSION_CONFIG = {
      key: 'jid',
  }

  server.use(session(SESSION_CONFIG, server))

  server.use(async (ctx, next) => {
    console.log('session is:', ctx.session);
    await next()
  })

  router.get('/set/user', async ctx => {
    ctx.session.user = {
      name: 'jokcy',
      age: 18
    }
    // 我们要直接返回 body
    ctx.body = 'set session success'
  })
 
  server.use(async (ctx, next) => {
    ctx.cookies.set('jid', '{name: 123}');
    // 在这里返回给前端
    await handle(ctx.req, ctx.res)
    ctx.respond = false;
  })

  server.use(router.routes())

  server.listen(9000, () => {
    console.log('koa server listening on 9000')
  })
})