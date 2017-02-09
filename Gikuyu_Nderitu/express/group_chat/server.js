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
let users = [], posts = []
io.sockets.on('connection', socket => {
	console.log('Using sockets');
	// console.log(socket.id);
	socket.emit('connected', {response: 'Your Name: '})
	users.push({name: '', id: socket.id})

	socket.on('new_user', data => {
		console.log('New User');
		users = users.map(obj =>{
			if(obj.id === socket.id){
				obj.name = data.name
				return obj
			}
			return obj
		})
		console.log(users);
		socket.emit('enter_granted', {users: users, posts: posts})

	})

	socket.on('new_message', data => {
		console.log(data.id, data.name, data.message);
		posts.push({name: data.name, message: data.message})
		io.emit('new_post', {name: data.name, post: data.message})
	})

	socket.on('disconnect', data =>{
		let disconnected = users.find(obj => obj.id === socket.id)
		if(disconnected.name){
			let remove = disconnected.name
			users = users.filter( obj => obj.id === socket.id)
			socket.broadcast.emit('user_disconnect', {name: removeat})
		}
	})
})
