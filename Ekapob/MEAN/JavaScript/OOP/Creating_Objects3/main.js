// Ekapob Ukritnukun
// ThaiGQ@gmail.com

// Now modify your code to use Prototype and the recommended way of OOP we showed in the previous chapter.
//
// You may have to change some private variables/methods to attributes to make all of the functionality work.
//
// Then make the following additions:
//
// Have each vehicle generate a random VIN number (study Math.random & Math.floor). Don’t worry about potential duplicates for now.

function VehicleConstructor(name, number_wheels, speed, number_passengers) {
    this.name = name;
    this.number_wheels = number_wheels;
    this.speed = speed;
    this.number_passengers = number_passengers;
    this.distance_travelled = 0;
    this.vin = Math.floor(Math.random()*1000000000000000);
    console.log(this.name + " created with VIN: " + this.vin);
    return this
}

VehicleConstructor.prototype.update_Distance_Travelled = function () {
    this.distance_travelled += this.speed;
    return this
}

VehicleConstructor.prototype.makeNoise = function () {
    console.log("Beep! Beep!");
    return this
}

VehicleConstructor.prototype.move = function () {
    this.update_Distance_Travelled();
    this.makeNoise();
    return this
}

VehicleConstructor.prototype.check_Miles = function () {
    console.log(this.distance_travelled);
    return this
}

var bike = new VehicleConstructor("Bike", 2, 10, 1);
bike.makeNoise();
bike.makeNoise = function () {
    console.log("Ring! Ring!");
    return this
}
bike.check_Miles().move().check_Miles()

var sedan = new VehicleConstructor("Sedan", 4, 65, 5);
sedan.makeNoise();
sedan.makeNoise = function () {
    console.log("Honk! Honk!");
    return this
}
sedan.check_Miles().move().check_Miles()

var bus = new VehicleConstructor("Bus", 4, 50, 6);
console.log(bus.number_passengers);
bus.add_passenger = function (new_passengers) {
    this.number_passengers += new_passengers;
    console.log(this.number_passengers);
    return this
}
bus.add_passenger(2);
bus.check_Miles().move().check_Miles().move().check_Miles().add_passenger(2);
