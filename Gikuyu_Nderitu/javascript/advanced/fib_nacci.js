'use strict'

const fib = function () {
	let prev = 0
	let cur = 1

	let nacci = function () {
		let temp = cur
		cur = prev+cur
		prev = temp
		console.log(prev);
	}
	return nacci
}


let fibby = fib()
fibby()
fibby()
fibby()
fibby()
fibby()
fibby()
fibby()
fibby()
fibby()
fibby()
fibby()
fibby()
