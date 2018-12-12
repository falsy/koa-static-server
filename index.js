const koa = require('koa');
const serve = require('koa-static');

const app = new koa();
			app.use(serve(__dirname + '/src'));

const port = 4321;
const server = app.listen(port);