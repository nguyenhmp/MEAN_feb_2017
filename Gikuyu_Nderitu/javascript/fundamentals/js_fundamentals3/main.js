'use strict'

let personConstructor = function (pname) {
	let name = pname
	let distance_traveled = 0
	let say_name = function () {
		console.log(name);
	}
	let say_something = function (phrase) {
		console.log(name + ' says ' +phrase);
	}
	let walk = function () {
		console.log(name + ' is walking');
		distance_traveled += 3
	}
	let run = function () {
		console.log(name + ' is running');
		distance_traveled += 10
	}
	let crawl = function () {
		console.log(name + ' is crawling');
		distance_traveled += 1
	}
}


let person = personConstructor('Paul')

console.log(person);


const ninjaConstructor = function (name, cohort) {
	let ninja = {}
	const belts = ['yellow', 'red', 'black']
	ninja.name = name
	ninja.cohort = cohort
	ninja.level = 0
	ninja.belt = belts[ninja.level]
	ninja.levelUp = function () {
		if(ninja.level < 2){
			ninja.level++;
			ninja.belt = belts[ninja.level]
		}
		return ninja
	}
	return ninja
}

let abe = ninjaConstructor('Abe', 'Eta')

console.log(abe.name, abe.cohort, abe.belt, abe.levelUp(), abe.belt);

//Methods of an object return undefined unless explicitly told otherwise
