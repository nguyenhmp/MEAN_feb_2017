'use strict'
function Form() {
	this.append = function (name, value) {
		this[name] = value
	}
}
$(document).ready(function(){
	const locations = ['Seattle','Washington D.C.', 'Mountain View', 'Santa Barbara', 'Burbank', 'Dallas', 'Boston'].sort()
	const languages = ['Ada', 'Javascript', 'Java', 'Python', 'Ruby', 'F#', 'Basic', 'C/C++'].sort()
	locations.forEach(function (val) {
		$('#loc').append(`<option value="${val}">${val}</option>`)
	})
	languages.forEach(function (val) {
		$('#lang').append(`<option value="${val}">${val}</option>`)
	})

	//Initiate connection with sockets
	const socket = io.connect()

	$('.survey-form').submit(function (e) {
		e.preventDefault()
		let formData = new Form()
		let data = $(this).serializeArray().forEach(val=>{
			formData.append(val.name, val.value);
		})

		socket.emit('posting_form', formData)
	})

	socket.on('form_response', data =>{
		let el = $('.response')
		let form_stuff = $('.form-data')
		if(el.length === 0){
			$('main').prepend(()=>{
				let response = `<div class="response">
				<p class="form-data">${JSON.stringify(data)}</p>

				</div>`
				return response
			})
		}else if(form_stuff.length === 0){
			el.prepend(`<p class="form-data">${JSON.stringify(data)}</p>`)
		}else{
			form_stuff.html(JSON.stringify(data))
		}
	})

	socket.on('random_number', data =>{
		let el = $('.response')
		let num_response = $('.random-number')
		if(el.length === 0){
			$('main').prepend(()=>{
				let response = `<div class="response">
					<p class="random-number">${data.num}</p>
				</div>`
				return response
			})
		}else if(num_response.length === 0){
			el.append(`<p class="random-number">${data.num}</p>`)
		}else{
			num_response.html(data.num)
		}
	})

})
