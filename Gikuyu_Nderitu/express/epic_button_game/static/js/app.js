'use strict'

$(document).ready(function(){
	console.log('jquery loaded');
	const socket = io.connect()
	$('.incrementer').click(()=>{
		socket.emit('epic_pushed', {})
	})

	$('.reset').click(()=>{
		socket.emit('reset_pushed', {})
	})

	socket.on('increment', data =>{
		$('.num').html(data.num)
	})

	socket.on('reset', data =>{
		$('.num').html(data.num)
		
	})
})
