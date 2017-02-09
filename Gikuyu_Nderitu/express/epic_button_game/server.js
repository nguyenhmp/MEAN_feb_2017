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

const server = app.listen(1337, function () {
	console.log('Running on the 1337 port!');
})

const io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
	console.log('Using sockets!');
	console.log(socket.id);
	let count = 0
	socket.on('epic_pushed', (data)=>{
		socket.emit('increment', {num: ++count})
	})

	socket.on('reset_pushed', (data) =>{
		count = 0
		socket.emit('reset', {num: count})
	})
})
