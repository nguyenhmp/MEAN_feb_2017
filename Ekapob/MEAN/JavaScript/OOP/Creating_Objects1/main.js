// Ekapob Ukritnukun
// ThaiGQ@gmail.com

// We are going to create our very own constructor. Create a VehicleConstructor that takes in the name, number of wheels, and the number of passengers. Then complete the following tasks:
// Each vehicle should have a makeNoise method
// Using the constructor, create a Bike
// Redefine the Bike’s makeNoise method to print “ring ring!”
// Create a Sedan
// Redefine the Sedan’s makeNoise method to print “Honk Honk!”
// Using the constructor, create a Bus
// Add a method to Bus that takes in the number of passengers to pick up and adds them to the passenger count​

function VehicleConstructor(name, number_wheels, number_passengers) {
    var vehicle = {};
    vehicle.name = name;
    vehicle.number_wheels = number_wheels;
    vehicle.number_passengers = number_passengers;

    vehicle.makeNoise = function () {
        console.log("Beep! Beep!");
        return vehicle
    }
    return vehicle
}

var bike = VehicleConstructor("Bike", 2, 1);
bike.makeNoise();
bike.makeNoise = function () {
    console.log("Ring! Ring!");
    return bike
}
bike.makeNoise();

var sedan = VehicleConstructor("Sedan", 4, 5);
sedan.makeNoise();
sedan.makeNoise = function () {
    console.log("Honk! Honk!");
    return sedan
}
sedan.makeNoise();

var bus = VehicleConstructor("Bus", 4, 6);
console.log(bus.number_passengers);
bus.add_passenger = function (new_passengers) {
    bus.number_passengers += new_passengers;
    console.log(bus.number_passengers);
    return bus
}
bus.add_passenger(2);
