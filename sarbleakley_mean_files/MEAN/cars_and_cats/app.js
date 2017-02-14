var http = require('http');

var fs = require('fs');

var server = http.createServer(function (request, response){
	console.log('client request URL:', request.url);
	if(request.url === '/'){
		fs.readFile('./views/index.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		})
	} 
	else if(request.url === '/stylesheets/style.css'){
    fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
     response.writeHead(200, {'Content-type': 'text/css'});
     response.write(contents);
     response.end();
    })
  }
    else if (request.url === "/cars") {
         fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }
    else if(request.url === '/images/future_car.jpg'){

    fs.readFile('./images/future_car.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
    else if(request.url === '/images/prius.jpg'){

    fs.readFile('./images/prius.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
    else if(request.url === '/images/tesla.jpg'){

    fs.readFile('./images/tesla.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
	else if(request.url === "/cars/new"){
		fs.readFile('./views/carsform.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		})
	}
	else if(request.url === "/cats"){
		fs.readFile('./views/cats.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		})
	}
    else if(request.url === '/images/marubib.jpg'){

    fs.readFile('./images/marubib.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
    else if(request.url === '/images/marubig.jpg'){

    fs.readFile('./images/marubig.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
    else if(request.url === '/images/maruchan.jpg'){

    fs.readFile('./images/maruchan.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
    else if(request.url === '/images/maruorange.jpg'){

    fs.readFile('./images/maruorange.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
	else {
		response.writeHead(404);
		response.end('File not found!!!');
	}
})
server.listen(7077);
console.log("Running in localhost at port 7077");