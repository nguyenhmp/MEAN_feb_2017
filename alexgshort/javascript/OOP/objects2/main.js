function VehicleConstructor(name, numWheels, numPassengers, speed){

    // private variables
    var distance_travelled = 0;
    var self = this;

    //public variables
    this.name = name;
    this.numWheels = numWheels;
    this.numPassengers = numPassengers;
    this.speed = speed;

    // public methods
    this.makeNoise = ()=>{
        console.log('silence');
    }
    this.move = ()=>{
        updateDistanceTravelled();
        this.makeNoise();
    }

    this.checkMiles = ()=>{
        console.log(distance_travelled);
    }

    // private methods
    var updateDistanceTravelled = ()=>{
        distance_travelled += this.speed;
    }
}

var bike = new VehicleConstructor('Schwinn', 2, 1, 5);
bike.makeNoise = ()=>{
    console.log('ring ring!');
}
console.log(bike.name);
bike.makeNoise();
bike.move();
bike.checkMiles();
console.log("");


var sedan = new VehicleConstructor('Cadillac', 4, 1, 30);
sedan.makeNoise = ()=>{
    console.log('Honk Honk!');
}
console.log(sedan.name);
sedan.makeNoise();
sedan.move();
sedan.checkMiles();
console.log('');

var bus = new VehicleConstructor('Big Yellow', 4, 1, 20);
bus.pickup = (num)=>{
    bus.numPassengers += num;
}
console.log(bus.name);
bus.makeNoise();
console.log(bus.numPassengers);
bus.pickup(5);
console.log(bus.numPassengers);
bus.move();
bus.checkMiles();
console.log('');
