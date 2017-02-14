// first we get the http module:
var http = require('http')
// now we get the fs (file system) module which allows us to read and write content for responses!
var fs = require('fs')
// now we will create a server using the http module:
var server = http.createServer(function (request, response){
  // see what URL the clients are requesting
  console.log('client request URL:', request.url)
  // this is how we do our routing
  if(request.url === '/'){
    fs.readFile('index.html', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-Type':'text/html'}) // send data about response
      response.write(contents) // send response body
      response.end() // response.end() // finished!
    })
  }
  else if (request.url === '/stylesheets/style.css'){
    fs.readFile('stylesheets/style.css', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-Type':'text/css'})
      response.write(contents)
      response.end()
    })
  }
  else if (request.url === '/dojo.html'){
    fs.readFile('dojo.html', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-Type':'text/html'})
      response.write(contents)
      response.end()
    })
  }
  else{
    response.writeHead(404)
    response.end('File not found!!!')
  }
})
server.listen(6789)
// print to terminal window
console.log("Running in localhost at port 6789")
