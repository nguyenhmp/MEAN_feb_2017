function VehicleConstructor(name, no_of_wheels, no_of_passengers){
  var vehicle = {};
  vehicle.name = name;
  vehicle.no_of_wheels = no_of_wheels;
  vehicle.no_of_passengers = no_of_passengers;

  vehicle.makenoise = function(){
    console.log('brrrrrrrr');
  }



  return vehicle;

}

var bike = new VehicleConstructor('Bike', 2, 1);
bike.makenoise = function(){
  console.log('ring ring!');
}
console.log(bike);
bike.makenoise();

var sedan = new VehicleConstructor('Sedan', 4, 4);
sedan.makenoise = function(){
  console.log('Honk Honk!!');
}
console.log(sedan);
sedan.makenoise();

var bus = new VehicleConstructor('Bus', 6 ,10 );
bus.addPassengers = function(x){
  bus.no_of_passengers+=x;
  console.log(bus.no_of_passengers);
}
console.log(bus);
bus.addPassengers(10);
console.log(bus);
