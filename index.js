const Koa = require("koa");
const app = new Koa();

app.use(ctx => {
  ctx.body = "Hello Koagg";
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
