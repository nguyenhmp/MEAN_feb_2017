function VehicleConstructor(name, number_of_wheels, number_of_passengers, speed){
  // PRIVATE
  var self = this
  var distance_traveled = 0
  var updateDistanceTraveled = function(){
    distance_traveled += self.speed
  }
  // PUBLIC
  this.name = name
  this.wheels = number_of_wheels
  this.passengers = number_of_passengers
  this.speed = speed
  this.vehicle_identification_number = NaN
  this.makeNoise = function(){
    console.log('beep beep!')
  }
  this.move = function(){
    updateDistanceTraveled();
    this.makeNoise();
  }
  this.checkMiles = function(){
    console.log(distance_traveled)
  }

}

VehicleConstructor.prototype.GetVIN = function(){
  var randomVIN = []
  for (var i = 1; i <= 17; i++){
    randomVIN.push(Math.floor(Math.random() * 9 + 1))
  }
  randomVIN = randomVIN.join('')
  this.vehicle_identification_number = randomVIN
  return this.vehicle_identification_number
}

var bike = new VehicleConstructor('bike', 2, 1, 25);
bike.makeNoise = function(){
  console.log('ring ring!')
}
console.log(bike.GetVIN())
console.log(bike.vehicle_identification_number)
