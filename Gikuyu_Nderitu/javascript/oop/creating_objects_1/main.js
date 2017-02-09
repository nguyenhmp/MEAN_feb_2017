'use strict'

// const Vehicle = class Vehicle {
// 	constructor(name, wheels, pass, speed){
// 		let distance_travelled = 0
// 		let self = this
// 		this.speed = speed
// 		this.name = name
// 		this.wheels = wheels
// 		this.passengers = pass
// 		this._noise = 'noise'
// 	}
//
// 	updateDistancedTravelled () {
// 		distance_travelled += self.speed
// 	}
//
// 	set noise(nnoise){
// 		this._noise = nnoise
// 	}
//
// 	get noise () {
// 		return this._noise
// 	}
//
// 	get move () {
// 		updateDistancedTravelled()
// 		this.noise()
// 	}
//
// 	get checkMiles () {
// 		return distance_travelled
// 	}
// }

const Vehicle = function (name, wheels, pass, speed) {
	let distance_travelled = 0
	let self = this
	this.speed = speed
	this.name = name
	this.wheels = wheels
	this.passengers = pass
	this._noise = 'noise'

	this.checkMiles = function () {
		console.log(distance_travelled);
		return this
	}

	const updateDistancedTravelled = function () {
		distance_travelled += self.speed
	}

	this.move = function () {
		updateDistancedTravelled()
		this.noise()
		return this
	}

	const randomVin = function () {
		let vinnum = ''
		for (var i = 0; i <= 9; i++) {
			vinnum += Math.floor(Math.random()*10)
		}
		return vinnum
	}

	this.vin = randomVin()
}

Vehicle.prototype.passengerPickup = function (num) {
	if(this.passenger_count + num <= this.passengers) {
		this.passenger_count += num
		return this
	}
	console.log("I'm sorry, but we can't pick up all of those people, please try again another day");
	return this
}

Vehicle.prototype.noise = function () {
	return this._noise
};

let bike = new Vehicle('Bike', 2, 1, 10)

console.log(bike.noise());
bike._noise = 'ring ring!'
console.log(bike.noise());

let sedan = new Vehicle('Sedan', 4, 7, 90) //Tesla FTW
sedan._noise= 'Honk Honk!'
console.log(sedan.noise());


let bus = new Vehicle('Bus', 4, 40, 2)
bus.passenger_count = 0

console.log(bus.passenger_count);
bus.passengerPickup(20)
console.log(bus.passenger_count);
bus.passengerPickup(20)
console.log(bus.passenger_count);
bus.passengerPickup(1)
console.log(bus.passenger_count);


// Modifications
bus.move().checkMiles().move().checkMiles().move().move().checkMiles()


//More Modifications
console.log(bike.vin);
console.log(sedan.vin);
console.log(bus.vin);
