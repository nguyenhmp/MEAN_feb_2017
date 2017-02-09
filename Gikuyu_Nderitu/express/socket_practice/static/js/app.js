'use strict'

$(document).ready(function(){
	console.log('jquery included');
	let socket = io.connect()
	console.log('Socket line worked!');

	$('button').click(function () {
		console.log('button clickes');
		socket.emit('button_clicked', {reason: "because I want to learn about sockets!"})
	})

	socket.on('server_response', function (data) {
		console.log(`Server says: ${data.response}`);
		console.log(data.cdata);
	})
})
