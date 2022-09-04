const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
// app.use(async ctx => {
//     console.log('ctx===', ctx);
//   ctx.body = 'Hello World';
// });

router.post('/api/test', async (ctx) => {
    console.log('ctx===', ctx);
    ctx.body = "open==post请求"
})
router.get('/', async (ctx) => {
    ctx.body = 'Hello World';
})

router.get('/api/aaa', async (ctx) => {
    // console.log('ctx===', ctx);
    ctx.body = "open==get请求"
})
app.use(router.routes())
app.listen(3005);