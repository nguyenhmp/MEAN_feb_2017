function VehicleConstructor(name, no_of_wheels, no_of_passengers,speed){
  var self = this;
  var distance_travelled = 0;
  var updateDistanceTravelled = function(){
      distance_travelled += vehicle.speed;
      console.log(distance_travelled);
  }
  var vehicle = {};
  vehicle.name = name;
  vehicle.no_of_wheels = no_of_wheels;
  vehicle.no_of_passengers = no_of_passengers;
  vehicle.speed = speed

  vehicle.makenoise = function(){
    console.log('brrrrrrrr');
    updateDistanceTravelled();
  }
  vehicle.move = function(){
    updateDistanceTravelled();
    this.makenoise();
  }
  vehicle.checkMiles = function(){
    console.log('total distance_travelled was '+ distance_travelled);
  }


  return vehicle;

}

var bike = new VehicleConstructor('Bike', 2, 1, 15);
bike.makenoise = function(){
  console.log('ring ring!');
  // updateDistanceTravelled();
}
console.log(bike);
bike.makenoise();
bike.move();
bike.checkMiles();

var sedan = new VehicleConstructor('Sedan', 4, 4);
sedan.makenoise = function(){
  console.log('Honk Honk!!');
}
console.log(sedan);
sedan.makenoise();

var bus = new VehicleConstructor('Bus', 6 ,10 );
bus.pickUpPassengers = function(x){
  bus.no_of_passengers+=x;
  console.log(bus.no_of_passengers);
}
console.log(bus);
bus.pickUpPassengers(10);
console.log(bus);
