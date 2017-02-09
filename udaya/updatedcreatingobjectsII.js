function VehicleConstructor(name, no_of_wheels, no_of_passengers,speed){
  var self = this;
  var distance_travelled = 0;
  var updateDistanceTravelled = function(){
      distance_travelled += self.speed;
      console.log(distance_travelled);
  }
  this.name = name;
  this.no_of_wheels = no_of_wheels;
  this.no_of_passengers = no_of_passengers;
  this.speed = speed

  this.makenoise = function(){
    console.log('brrrrrrrr');
    updateDistanceTravelled();
  }
  this.move = function(){
    updateDistanceTravelled();
    this.makenoise();
  }
  this.checkMiles = function(){
    console.log('total distance_travelled was '+ distance_travelled);
  }


  return this;

  }
  var bike = new VehicleConstructor('Bike', 2, 1, 15);
  bike.makenoise();
  bike.move();
  bike.checkMiles();
