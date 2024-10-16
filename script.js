const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style> * {
          padding: 0;
          margin: 0;
      }
      
      .banku {
          height: 40px;
          width: 40px;
          transition: all;
          transition-duration: 1.5s;
          background-color: yellow;
      
      }
      
      .banku:hover {
          height: 400px;
          width: 400px;
      }
      
      .ladoo {
          z-index: 1;
          background-color: yellow;
          padding: 2px 2px;
          display: none;
          position: absolute;
          min-width: 500px;
          box-shadow: 6px 0px 16px 0px rgb(0, 0, 0, 0.2);
          font-size: 35px;
      }
      
      .banku:hover .ladoo {
          display: block;
      }</style>
  </head>
  <body>
      <div class="banku">
          my name is banku.
          <div class="ladoo">
              bachoo mai ladoo hu
          </div>
      </div>
      
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
