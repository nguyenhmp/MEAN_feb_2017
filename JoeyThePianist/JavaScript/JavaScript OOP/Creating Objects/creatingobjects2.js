function VehicleConstructor(name, wheels, passengers, speed){
	this.name = name;
	this.wheels = wheels;
	this.passengers = passengers;
	this.speed = speed;
	var self = this;
	var distance_traveled = 0;
	var updateDistanceTraveled = function(){
		distance_traveled += self.speed;
		return self;
	}
	this.makeNoise = function(){
		console.log("Noise.");
	}
	this.move = function(){
		updateDistanceTraveled();
		this.makeNoise();
		return this;
	}
	this.checkMiles = function(){
		console.log(distance_traveled);
	}
}

var myBike = new VehicleConstructor('Mongoose', 2, 1, 5);
myBike.makeNoise = function(){
	console.log("ring ring!");
}
console.log(myBike.name);
myBike.makeNoise();

var mySedan = new VehicleConstructor('WRX', 4, 2, 60);
mySedan.makeNoise = function(){
	console.log("Honk Honk!");
}
console.log(mySedan.name);
mySedan.makeNoise();

var theBus = new VehicleConstructor('Greyhound', 4, 36, 40);
theBus.pickUpPassengers = function(newpass){
	if(typeof(newpass) == "number"){
		console.log(`Picking up ${newpass} passengers...`)
		console.log("Count Before:", this.passengers);
		this.passengers += newpass;
		console.log("Count After:", this.passengers);
		console.log("Pick up complete!")
	}
	return this;
}
console.log(theBus.name);
theBus.makeNoise();
theBus.pickUpPassengers(10);
console.log(mySedan.name, mySedan.speed)
mySedan.move().checkMiles();