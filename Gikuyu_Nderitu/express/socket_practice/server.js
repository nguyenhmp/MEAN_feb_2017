'use strict'
//Import Dependencies
const express = require('express');
const middleware = require('./utils/middleware');
//Initialize express
const app = express()

//Start customized middleware
middleware(app, express)


//Set up routes
app.get('/', function (req, res) {
	console.log('Hit home route');
	res.render('index')
})

let server = app.listen(1337, function () {
	console.log('Running on the 1337 port!');
})

const io = require('socket.io').listen(server)

// Socket controllers
io.sockets.on('connection', function (socket) {
	console.log('Sockets are in use!');
	console.log(socket.id);
	socket.on('button_clicked', function (data) {
		console.log(socket.id);
		console.log(`Client data is: \n ${data}`);
		console.log('Someone clicked a button! Reason:' + data.reason);
		socket.emit('server_response', {response: 'sockets are the best!', cdata: data})
	})
})
