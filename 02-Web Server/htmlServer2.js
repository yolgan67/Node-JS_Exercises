const http =require("http");
const host = "localhost";
const port = 5000;
const fs = require('fs').promises;
let indexFile;

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  res.writeHead(200);
  res.end(indexFile);
};
fs.readFile(__dirname + "/index.html")
    .then(contents => {
        indexFile = contents;
        server.listen(port, host, () => {
            console.log(`Server is running on http://${host}:${port}`);
        })
  })
  .catch(err => {
    console.error(`Could not read index.html file: ${err}`);
    process.exit(1);
}); 
  const server = http.createServer(requestListener);


server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

