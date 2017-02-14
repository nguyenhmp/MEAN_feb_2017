function VehicleConstructor(name, numOfWheels, numOfPassengers, speed){

	if (!(this instanceof VehicleConstructor)){
		return new VehicleConstructor(name, numOfWheels, numOfPassengers, speed);
	}

	var chars = "0123456789ABCEDGHIJKLMNOPQRSTUVWXYZ"

	this.distanceTraveled = 0;
	this.speed = speed;
	this.name = name;
	this.numOfWheels = numOfWheels
	this.numOfPassengers = numOfPassengers
	this.vin = createVin();

	function createVin(){
		var vin = "";
		for (var i = 0; i < 17; i++){
			vin += chars[Math.floor(Math.random()*35)]
		}
	return vin;		
	}
	this.run = function() {

		console.log("I am a " + this.name + ". I have " + this.numOfWheels + " wheels. I also have " + this.numOfPassengers + " passengers.");
	}


}



var Sedan = new VehicleConstructor("Sedan", 3, 4);
console.log(this)
var Bike = new VehicleConstructor("Bike", 2, 2)
console.log(this)
var Bus = new VehicleConstructor("Bus", 4, 25)
console.log(this)

Bus.PickUpPassengers = function() {
	Bus.numOfPassengers += 1
}

Bike.makeNoise = function() {
	console.log("ring ring!")
	}

Sedan.makeNoise = function() {
	console.log("Honk Honk!")
}

Bus.makeNoise = function() {
	console.log("Honk Honk!")
}

Bus.makeNoise();

Sedan.run();

VehicleConstructor.prototype.makeNoise = function(noise){
	var noise = "Woo Woo";
	console.log(noise);
	return this;
}

VehicleConstructor.prototype.move = function(){
	this.makeNoise();
	this.updateDistanceTraveled();
	return this;
}

VehicleConstructor.prototype.checkMiles = function(){
	console.log(distanceTraveled)
}

VehicleConstructor.prototype.updateDistanceTraveled = function(){
	this.distanceTraveled += this.speed;
	console.log(this.distanceTraveled);
	return this;
}

var car = new VehicleConstructor('car', 4, 4, 80)