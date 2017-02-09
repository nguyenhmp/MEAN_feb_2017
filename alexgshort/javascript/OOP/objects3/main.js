function VehicleConstructor(name, numWheels, numPassengers, speed){

    // private variables
    var self = this;

    //public variables
    this.name = name;
    this.numWheels = numWheels;
    this.numPassengers = numPassengers;
    this.speed = speed;
    this.distance_travelled = 0;

    function generateVIN(len){
        var text = "";
        var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for(var i=0; i < len; i++){
            text += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        return text;
    }

    this.VIN = generateVIN(6);

}

VehicleConstructor.prototype.updateDistanceTravelled = function(){
    this.distance_travelled += this.speed;
    return this;
}

VehicleConstructor.prototype.makeNoise = function(){
    console.log('silence');
    return this;
}

VehicleConstructor.prototype.move = function(){
    this.updateDistanceTravelled();
    this.makeNoise();
    return this;
}

VehicleConstructor.prototype.checkMiles = function(){
    console.log(this.distance_travelled);
}



var bike = new VehicleConstructor('Schwinn', 2, 1, 5);
bike.makeNoise = ()=>{
    console.log('ring ring!');
}

console.log(bike.name);
bike.makeNoise();
bike.move();
bike.checkMiles();
console.log(bike.VIN);
console.log("");


var sedan = new VehicleConstructor('Cadillac', 4, 1, 30);
sedan.makeNoise = ()=>{
    console.log('Honk Honk!');
}
console.log(sedan.name);
sedan.makeNoise();
sedan.move();
sedan.checkMiles();
console.log(sedan.VIN);
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
console.log(bus.VIN);
console.log('');
