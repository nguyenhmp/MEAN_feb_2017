'use strict'
//Import Dependencies
const express = require('express');
const middleware = require('./utils/middleware');
//Initialize express
const app = express()

//Start customized middleware
middleware(app, express)


//Set up routes
// GET Routes
app.get('/', function (req, res) {
	return res.render('index')
})

const server = app.listen(1337, function () {
	console.log('Running on the 1337 port!');
})

const io = require('socket.io').listen(server)

io.sockets.on('connection', socket =>{
	console.log('Using Sockets!');
	console.log(socket.id);

	socket.on('posting_form', data =>{
		console.log(data);
		socket.emit('form_response', data)
		socket.emit('random_number', {num: Math.floor(Math.random()*1000+1)})
	})
})
