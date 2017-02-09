// function NinjaConstructor(name, prevOccupation) {
//   this.name = name;
//   this.prevOccupation = prevOccupation;
//   this.introduce = function() {
//     console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
//   }
// }
// var dylan = new NinjaConstructor('Dylan', 'Construction Worker');
// console.log(dylan);
// dylan.introduce();
// var Giggs = new NinjaConstructor('Giggs', 'Old Lady');
// console.log(Giggs);
// Giggs.introduce();


// function User(name, ssn){
//   var social = ssn;
//   this.name = name;
//   }
// var mike = new User('Mike', 274164398);
// console.log(mike.name);
// console.log(mike.social);
//
// // We are able to access SSN using the getter function which allows reading private variables..
// function User(name, ssn){
//   var social = ssn;
//   this.name = name;
//   this.getSsn = function(){
//     return social;
//   }
// }
// var mike = new User('Mike', 274164398);
// console.log(mike.name);
// console.log(mike.social);
// console.log(mike.getSsn());

function Ninja(name, age, prevOccupation) {
  // PRIVATE
  var self = this;
  var privateVar = "This is a private variable";
  var privateMethod = function() {
    console.log(self); // What will print here?
  }
  // PUBLIC
  this.name = name;
  this.age = age;
  this.prevOccupation = prevOccupation
  // PUBLIC METHODS DECLARED HERE
  this.introduce = function() {
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
    privateMethod();
    console.log(privateVar);
  }
}
var Speros = new Ninja("Speros", 24, "MBA");
Speros.introduce();
