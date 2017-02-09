'use strict'

function red_blue() {
	console.log('click');
	$(this).toggleClass('red')
	$(this).toggleClass('blue')
}

function green() {
	console.log('hover');
	$(this).toggleClass('green')
}

function add(e) {
	console.log('enter');
	if (e.keyCode === 13) {
		$('.container').append('<button type="button" class="btn blue" name="button">Click Me!</button>')
	}
}


$(document).ready(function () {
	$(".container").on('click', "button", red_blue)
	$(".container").on('mouseenter mouseleave', "button", green)

	$(document).bind('keydown', add)
})
