// Ekapob Ukritnukun
// ThaiGQ@gmail.com

// Modify your VehicleConstructor (from earlier) to use this & new (and follow the JS conventions talked about in the previous chapters). To recap, here were the requirements from Part I:
//
// Create a vehicleConstructor that takes in the name, number of wheels, and number of passengers
// Each vehicle should have a makeNoise method
// Using the constructor, create a Bike
// redefine the Bike’s makeNoise method to print “ring ring!”
// Using the constructor, create a Sedan
// redefine the Sedan’s makeNoise method to print “Honk Honk!”
// Using the constructor, create a Bus
// Give the bus a pickUpPassengers method that takes in the number of passengers to pick up and adds them to the passenger count

function VehicleConstructor(name, number_wheels, speed, number_passengers) {
    var self = this;
    var distance_travelled = 0;
    var update_Distance_Travelled = function () {
        distance_travelled += self.speed;
        return self
    }

    this.name = name;
    this.number_wheels = number_wheels;
    this.speed = speed;
    this.number_passengers = number_passengers;

    this.makeNoise = function () {
        console.log("Beep! Beep!");
        return this
    }

    this.move = function () {
        update_Distance_Travelled();
        this.makeNoise();
        return this
    }

    this.check_Miles = function () {
        console.log(distance_travelled);
        return this
    }
}

var bike = new VehicleConstructor("Bike", 2, 10, 1);
bike.makeNoise();
bike.makeNoise = function () {
    console.log("Ring! Ring!");
    return this
}
bike.makeNoise();
console.log(bike.speed);
bike.check_Miles().move().check_Miles()

var sedan = new VehicleConstructor("Sedan", 4, 65, 5);
sedan.makeNoise();
sedan.makeNoise = function () {
    console.log("Honk! Honk!");
    return this
}
sedan.makeNoise();
console.log(sedan.speed);
sedan.check_Miles().move().check_Miles()

var bus = new VehicleConstructor("Bus", 4, 50, 6);
console.log(bus.number_passengers);
bus.add_passenger = function (new_passengers) {
    this.number_passengers += new_passengers;
    console.log(this.number_passengers);
    return this
}
bus.add_passenger(2);
console.log(bus.speed);
bus.check_Miles().move().check_Miles().move().check_Miles()
