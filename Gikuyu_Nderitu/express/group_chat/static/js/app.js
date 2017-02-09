'use strict'

$(document).ready(function(){
	console.log('jquery ready');
	const socket = io.connect()

	// Server reception
	socket.on('connected', data =>{
		console.log(data.response);

		$('.container').html(`
			<div class='welcome'>
				<h3>The page at https://devmachine says:</h3>
				<p>${data.response}</p>
				<input type="text" name="name" id="name"/>
				<div class="response-buttons"><button class="cancel">Cancel</button><button class="submit">OK</button></div>
			</div>
		`)
		//Event handlers
		$('.submit').on("click", function (){
			let name = $('#name').val()
			if (!name) {
				alert('Please enter name field')
			}else{
				socket.emit('new_user', {name: name})
			}
		})
	})

	socket.on('enter_granted', data =>{
		let name = data.users.find(obj => obj.id===socket.id).name
		let past_posts = `<p class="post-begin">Entered Chat Room</p>`
		if(data.posts.length > 0){
			past_posts += data.posts.reduce((prev, cur)=>{
				return prev +`<div class="row"><span class="name">${cur.name}</span><span class="message">${cur.message}</span></div>`
			},'')
		}

		console.log(past_posts);
		console.log(name, socket.id);
		$('.container').html(`
			<h1 class="chat-head">Connection Board</h1>
			<div class="chatbox">
				<div class="posts">${past_posts}</div>
				<input type="text" class="chat" />
				<button class="send-chat">Send</button>
			</div>
		`)

		$('.chat').focus()

		$('.chat').data({
			id: socket.id,
			name: name
		})

		console.log($('.chat').data('id'));
		// Bind user event
		$('.send-chat').on('click', function(){
			let message = $('.chat').val()
			$('.chat').val('')
			if(message)
				socket.emit('new_message', {message: message, id: $('.chat').data('id'), name: $('.chat').data('name')})
		})
	})

	socket.on('new_post', data =>{
		console.log(data);
		$('.posts').append(`<div class="row"><span class="name">${data.name}:</span><span class="message">${data.post}</span></div>`)
	})

	socket.on('user_disconnect', data =>{
		console.log(data.name);
		$('.posts').append(`<div class="row"><span class="message disconnect">${data.name}</span> just left the room</div>`)

	})
})
