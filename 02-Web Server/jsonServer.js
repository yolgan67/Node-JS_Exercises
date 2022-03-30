const http =require("http");
const host = "localhost";
const port = 5000;
const requestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  // res.end("My first server!");
  res.end(`{"message": "This is a JSON response"}`);
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
})