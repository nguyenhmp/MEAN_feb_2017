'use strict'
let curInt;
function displayName(data) {
	let char_count = 0,name = '', name_str = ''
	if(data.avatar_url) $('.pic').html("<img src='"+ data.avatar_url+"'/>")
	if (data.name) {
		name = data.name.split('')
		.map(char =>{
			if(char === ' ') return String.fromCharCode(160)
			return char
		})
		.join('')
	}else{
		name = data.login.split('')
		.map(char =>{
			if(char === ' ') return String.fromCharCode(160)
			return char
		})
		.join('')
	}

	curInt = window.setInterval(function () {
		if (char_count >= name.length) {
			clearInterval(curInt)
		}else{
			name_str += name[char_count++]
		}
		console.log(name_str, char_count);
		$('.name').html(name_str)
	}, 100)
	console.log(name);
}

$(document).ready(function () {
	$('.btn').click(function () {
		for (var i = 1; i < curInt; i++) {
			window.clearInterval(i)
		}

		let username = $('.username').val()
		console.log(username);
		let response = $.ajax({
			url: "https://api.github.com/users/"+username,
			success: function (data) {
				console.log(data);
			}
		})
		.fail(function (e) {
			$('.pic').children('img').fadeOut(1000)
			$('.name').html('Username not found, try another!')
		})

		response.then(displayName)
	})
})
