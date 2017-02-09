'use strict'

$(document).ready(function(){
	const locations = ['Seattle','Washington D.C.', 'Mountain View', 'Santa Barbara', 'Burbank', 'Dallas', 'Boston'].sort()
	const languages = ['Ada', 'Javascript', 'Java', 'Python', 'Ruby', 'F#', 'Basic', 'C/C++'].sort()
	locations.forEach(function (val) {
		$('#loc').append(`<option value="${val}">${val}</option>`)
	})
	languages.forEach(function (val) {
		$('#lang').append(`<option value="${val}">${val}</option>`)
	})


})
