'use strict'

const _d2 = (function() {
	'use strict';
	let D2 = function () {
		this.map = function (arr, callback, narr = []) {
			if (typeof(callback) !== 'function') {
				throw new Error('I apologize. The second argument that you pass must be a function')
			}
			for (var i = 0; i < arr.length; i++) narr.push(callback(arr[i]))
			return narr
		}
		this.reduce = function (arr, callback, memo = 0) {
			if (typeof(callback) !== 'function') {
				throw new Error('I apologize. The second argument that you pass must be a function')
			}
			for (var i = 0; i < arr.length; i++) memo += callback(arr[i])
			return memo
		}
		this.find = function (arr, callback) {
			if (typeof(callback) !== 'function') {
				throw new Error('I apologize. The second argument that you pass must be a function')
			}
			let val
			for (let i = 0; i < arr.length; i++) {
				val = callback(arr[i], i, arr)
				if (val) {
					return arr[i]
				}
			}
			return undefined
		}

		this.filter = function (arr, callback, narr = [], found = false) {
			if (typeof(callback) !== 'function') {
				throw new Error('I apologize. The second argument that you pass must be a function')
			}
			for (var i = 0; i < arr.length; i++) {
				found = callback(arr[i], i, arr)
				if (found) narr.push(arr[i])
				found = false
			}
			return narr
		}

		this.reject = function (arr, callback, narr = [], found = true) {
			if (typeof(callback) !== 'function') {
				throw new Error('I apologize. The second argument that you pass must be a function')
			}
			for (var i = 0; i < arr.length; i++) {
				found = callback(arr[i], i, arr)
				if(!found) narr.push(arr[i])
				found = true
			}
			return narr
		}

	}

	return new D2()
}());


console.log(_d2.map([2,45,26,7,856,75], function (val) {
	return val +'L'
}))

console.log(_d2.reduce([2,-45,26,7,856,75], function (value) {
	return value
}))

console.log(_d2.find(['D2', 47, 'Holla', 2], function (value) {
	return value === 2
}));

console.log(_d2.find(['D2', 47, 'Holla', 2], function (value) {
	return value === 3
}));

console.log(_d2.filter([1,2,3,4,5,6,7,8,9,10], function (value) {
	return value <6
}));
console.log(_d2.reject([1,2,3,4,5,6,7,8,9,10], function (value) {
	return value <6
}));
