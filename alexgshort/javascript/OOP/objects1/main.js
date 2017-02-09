function VehicleConstructor(name, numWheels, numPassengers){
    vehicle = {};

    vehicle.name = name;
    vehicle.numWheels = numWheels;
    vehicle.numPassengers = numPassengers;

    vehicle.makeNoise = ()=>{
        console.log('silence');
    }
    return vehicle;
}

var bike = VehicleConstructor('Schwinn', 2, 1);
bike.makeNoise = ()=>{
    console.log('ring ring!');
}
console.log(bike.name);
bike.makeNoise();


var sedan = VehicleConstructor('Cadillac', 4, 1);
sedan.makeNoise = ()=>{
    console.log('Honk Honk!');
}
console.log(sedan.name);
sedan.makeNoise();

var bus = VehicleConstructor('Big Yellow', 4, 1);
bus.pickup = (num)=>{
    bus.numPassengers += num;
}
console.log(bus.name);
bus.makeNoise();
console.log(bus.numPassengers);
bus.pickup(5);
console.log(bus.numPassengers);
