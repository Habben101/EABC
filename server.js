const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    if (pathname && pathname !== pathname.toLowerCase()) {
      res.writeHead(301, {
        Location: pathname.toLowerCase(),
      });
      res.end();
      return;
    }

    app.render(req, res, pathname, parsedUrl.query);
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
