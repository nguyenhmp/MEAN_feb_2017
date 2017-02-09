var http = require('http');

var fs = require('fs');

var server = http.createServer(function(request,response){

  console.log('client request url :', request.url );

  if (request.url === '/cars') {

    fs.readFile('views/cars.html', 'utf8', function(errors,contents){
        response.writeHead(200,{'Content-Type': 'text/html'});
        response.write(contents);

        response.end();
    });
  }

  else if (request.url === '/cats') {

      fs.readFile('views/cats.html', 'utf8', function(errors,contents){
        response.writeHead(200,{'Content-Type' : 'text/html'});
        response.write(contents);
        response.end();
      });
  }

  else if (request.url === '/cars/new') {

      fs.readFile('views/form.html', 'utf8', function(errors,contents){
        response.writeHead(200,{'Content-Type' : 'text/html'});
        response.write(contents);
        response.end();
      });
  }

  else if (request.url === '/stylesheets/master.css') {

    fs.readFile('stylesheets/master.css', 'utf8', function(errors,contents){
        response.writeHead(200,{'Content-Type': 'text/css'});
        response.write(contents);
        response.end();
      });

  }

  else if (request.url === '/images/car1.jpeg') {

    fs.readFile('images/car1.jpeg',  function(errors,contents){
        response.writeHead(200,{'Content-Type': 'images'});
        response.write(contents);
        response.end();
      });

  }

  else if (request.url === '/images/car2.jpeg') {

    fs.readFile('images/car2.jpeg',  function(errors,contents){
        response.writeHead(200,{'Content-Type': 'images'});
        response.write(contents);
        response.end();
      });

  }

  else if (request.url === '/images/car3.jpeg') {

    fs.readFile('images/car3.jpeg',  function(errors,contents){
        response.writeHead(200,{'Content-Type': 'images'});
        response.write(contents);
        response.end();
      });

  }
  else if (request.url === '/images/car4.jpeg') {

    fs.readFile('images/car4.jpeg',  function(errors,contents){
        response.writeHead(200,{'Content-Type': 'images'});
        response.write(contents);
        response.end();
      });

  }
  else if (request.url === '/images/cat1.jpeg') {

    fs.readFile('images/cat1.jpeg',  function(errors,contents){
        response.writeHead(200,{'Content-Type': 'images'});
        response.write(contents);
        response.end();
      });

  }

  else if (request.url === '/images/cat2.jpeg') {

    fs.readFile('images/cat2.jpeg',  function(errors,contents){
        response.writeHead(200,{'Content-Type': 'images'});
        response.write(contents);
        response.end();
      });

  }

  else if (request.url === '/images/cat3.jpeg') {

    fs.readFile('images/cat3.jpeg',  function(errors,contents){
        response.writeHead(200,{'Content-Type': 'images'});
        response.write(contents);
        response.end();
      });

  }
  else if (request.url === '/images/cat4.jpeg') {

    fs.readFile('images/cat4.jpeg',  function(errors,contents){
        response.writeHead(200,{'Content-Type': 'images'});
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
