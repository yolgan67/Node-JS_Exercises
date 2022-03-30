const http = require('http')
const { listenerCount } = require('process')
const myServer = http.createServer((request,response)=>{
  response.writeHead(200,{'Content-Type':'application/json'})
  if(request.url === "/"){
    response.write("<h1>Hello World</h1> <h1>This is Home Page</h1>")
  }else if(request.url === "/student"){
    response.write("<h1>This is Student Page</h1>")
  }else if(request.url === "/admin"){
    response.write("<h1>This is Admin Page</h1>")
  }else if(request.url === "/data"){
    response.write(JSON.stringify({message:"This is a message from web server!"}) )
  }else{
    response.write("<h1>404 Not Page</h1>")
  }
response.end()
})
myServer.listen(5000)