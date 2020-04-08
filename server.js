const next = require('next')
var express = require('express');


const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {

  var server = express();
  server.get("/a/:id", async(req, res) => {
    console.log('服务器', req.params.id);
    handle(req, res, {
      pathname: '/a',
      query: { id: 'wodasd' },
    })
  });

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('Ready on http://localhost:3000')
  })

})