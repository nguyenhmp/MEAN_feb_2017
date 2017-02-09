'use strict'

const myobj = {
	loop: function (x, y) {
		let start, end
		if (x <= y) {
			start = x
			end = y
		}else {
			start = y
			end = x
		}
		for ( ; start <= end; start++) {
			console.log(start);
		}
	},
	min: function (arr) {
		let min = arr[0]
		for (var i = 1; i < arr.length; i++) {
			if(arr[i] < min) min = arr[i]
		}

		return min
	},
	avg: function (arr) {
		let sum = 0
		for(var i in arr) sum += arr[i]
		return sum/arr.length
	}
}

let Person = function () {
	let name = 'Gikuyu'
	this.distance_traveled = 0
	this.say_name = function () {
		console.log(name);
	}
	this.say_something = function (phrase) {
		console.log(name + ' says ' +phrase);
	}
	this.walk = function () {
		console.log(name + ' is walking');
		this.distance_traveled += 3
	}
	this.run = function () {
		console.log(name + ' is running');
		this.distance_traveled += 10
	}
	this.crawl = function () {
		console.log(name + ' is crawling');
		this.distance_traveled += 1
	}
}


let person = new Person()

console.log(person.say_name());
console.log(person.say_something('Frickin A'));
console.log(person.walk());
console.log(person.run());
console.log(person.crawl());
console.log(person.distance_traveled);


//Methods of an object return undefined unless explicitly told otherwise
