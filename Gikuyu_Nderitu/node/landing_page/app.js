'use strict'
const http = require('http');
const fs = require('fs')
const path = require('path');
const server = http.createServer(function (req, res) {
	console.log('Client request URL: ', req.url, 'At path:', path.parse(req.url));
	if (req.url === '/') {
		fs.readFile('page/index.html', 'utf8', function (err, contents) {
			res.writeHead(200, {'Content-Type': 'text/html'}) //Sends data about response
			res.write(contents)
			res.end()
		})
	}else if(req.url === '/ninjas'){
		fs.readFile('page/ninjas.html', 'utf8', function (err, contents) {
			res.writeHead(200, {'Content-Type': 'text/html'}) //Sends data about response
			res.write(contents)
			res.end()
		})
	}else if(req.url === '/dojos/new'){
		fs.readFile('page/dojos.html', 'utf8', function (err, contents) {
			res.writeHead(200, {'Content-Type': 'text/html'}) //Sends data about response
			res.write(contents)
			res.end()
		})
	}else if (path.parse(req.url).dir=== '/img') {
		fs.readFile(req.url.substring(1), function (err, contents) {
			console.log(req.url);
			res.writeHead(200, {'Content-Type': 'image/jpg'})
			res.write(contents)
			res.end()
		})
	}
	else {
		res.writeHead(404)
		res.end('File not found!!!')
	}
})


server.listen(6789)

console.log("Running in devmachine at port 6789");
