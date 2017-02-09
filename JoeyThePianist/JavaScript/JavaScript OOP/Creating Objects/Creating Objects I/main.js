// Creating Objects I
function VehicleConstructor(name, wheelcount, passengercount){
	var vehicle = {}; // Return this...
/*
Vehicle's properties
*/
	vehicle.name = name;
	vehicle.wheelcount = wheelcount;
	vehicle.passengercount = passengercount;
/*
Vehicle's methods
*/
	vehicle.makeNoise = function(noise){
		console.log(`${noise}`);
	}
	return vehicle;
}// End of VehicleConstructor

var bike = VehicleConstructor("Bike", 2, 1);
console.log(bike.name);
bike.makeNoise("ring ring!");

var sedan = VehicleConstructor("Sedan", 4, 4);
console.log(sedan.name);
sedan.makeNoise("Honk Honk!");

var bus = VehicleConstructor("Bus", 4, 72);
console.log(bus.name);
// console.log(bus.passengercount)
bus.addPass = function(numpass){
	if (typeof(numpass) != "number"){
		return false;
	}
	console.log("Count Before:", this.passengercount);
	this.passengercount += numpass;
	console.log("Count After:", this.passengercount);
	return this;
}
console.log(bus.addPass(10));