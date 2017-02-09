var http = require('http');

var fs = require('fs');

var server = http.createServer(function(request,response){

  console.log('client request url :', request.url );

  if (request.url === '/') {

    fs.readFile('index.html', 'utf8', function(errors,contents){
        response.writeHead(200,{'Content-Type': 'text/html'});
        response.write(contents);
        
        response.end();
    });
  }

  else if (request.url === '/dojo') {

      fs.readFile('dojo.html', 'utf8', function(errors,contents){
        response.writeHead(200,{'Content-Type' : 'text/html'});
        response.write(contents);
        response.end();
      });
  }

  else if (request.url === '/main.css') {

    fs.readFile('main.css', 'utf8', function(errors,contents){
        response.writeHead(200,{'Content-Type': 'text/css'});
        response.write(contents);
        response.end();
      });

  }




  else{
    response.writeHead(418);
    response.end('requested file not found');
  }


});

server.listen(8080);

console.log('I am running on localhost:8080');
