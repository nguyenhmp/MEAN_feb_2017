'use strict'
const http = require('http');
const fs = require('fs')
const path = require('path');
const server = http.createServer(function (req, res) {
	console.log('Client request URL: ', req.url, 'At path:', path.parse(req.url));
	if (req.url === '/') {
		fs.readFile('index.html', 'utf8', function (err, contents) {
			res.writeHead(200, {'Content-Type': 'text/html'}) //Sends data about response
			res.write(contents)
			res.end()
		})
	}else if(req.url === '/awesome'){
		fs.readFile('awesome.html', 'utf8', function (err, contents) {
			res.writeHead(200, {'Content-Type': 'text/html'}) //Sends data about response
			res.write(contents)
			res.end()
		})
	}else if (req.url === '/get_css') {
		fs.readFile('css/style.css', 'utf8', function (err, contents) {
			res.writeHead(200, {'Content-Type': 'text/css'}) //Sends data about response
			res.write(contents)
			res.end()
		})
	}else if (req.url === '/get_js') {
		fs.readFile('js/main.js', 'utf8', function (err, contents) {
			res.writeHead(200, {'Content-Type': 'text/javascript'})
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


server.listen(1337)

console.log("Running in devmachine at port 1337");
