'use strict'
const http = require('http');
const fs = require('fs')
// const url = require('url');
const path = require('path');
const server = http.createServer(function (req, res) {
	console.log('Client request URL: ', req.url, 'At path:', path.dirname(req.url));
	let route = path.dirname

	if (req.url === '/') {
		fs.readFile('views/index.html', 'utf8', function (err, contents) {
			res.writeHead(200, {'Content-Type': 'text/html'}) //Sends data about response
			res.write(contents)
			res.end()
		})
	}else if(req.url === '/cars'){
		fs.readFile('views/cars.html', 'utf8', function (err, contents) {
			res.writeHead(200, {'Content-Type': 'text/html'}) //Sends data about response
			res.write(contents)
			res.end()
		})
	}else if(req.url === '/cats'){
		fs.readFile('views/cats.html', 'utf8', function (err, contents) {
			res.writeHead(200, {'Content-Type': 'text/html'}) //Sends data about response
			res.write(contents)
			res.end()
		})
	}else if(req.url === '/cars/new'){
		fs.readFile('views/car_form.html', 'utf8', function (err, contents) {
			res.writeHead(200, {'Content-Type': 'text/html'}) //Sends data about response
			res.write(contents)
			res.end()
		})
	}else if (req.url === '/get_css') {
		fs.readFile('stylesheets/style.css', 'utf8', function (err, contents) {
			res.writeHead(200, {'Content-Type': 'text/css'}) //Sends data about response
			res.write(contents)
			res.end()
		})
	}else if (path.dirname(req.url) === '/img') {
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


server.listen(7077)

console.log("Running in localhost at port 7077");
