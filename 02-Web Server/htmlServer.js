const http =require("http");
const host = "localhost";
const port = 5000;

const fs = require('fs').promises;
const requestListener = function (req, res) {
  fs.readFile(__dirname + "/index.html")
      .then(contents => {
          res.setHeader("Content-Type", "text/html;charset=utf-8");
          res.writeHead(200);
          res.end(contents);
      }).catch(err => {
        res.writeHead(500);
        res.end(err);
        return;
    }); };
const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
})