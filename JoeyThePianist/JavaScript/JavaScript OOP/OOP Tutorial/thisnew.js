//---------------------------------------------Previous Constructor Style------------------------------------------

function NinjaConstructor(name, prevOccupation) {
  var ninja = {}; // <-- PAY ATTENTION TO THIS LINE!
  ninja.name = name;
  ninja.prevOccupation = prevOccupation;
  ninja.introduce = function() {
    console.log("Hi my name is " + ninja.name + ". I used to be a " + ninja.prevOccupation + " and now I'm a Ninja!");
  }
  return ninja; // <-- AND THIS LINE!
}

//--------------------------------------------Replacing ninja with this--------------------------------------------

function NinjaConstructor(name, prevOccupation) {
  var this = {}; // <-- PAY ATTENTION TO THIS LINE!
  this.name = name;
  this.prevOccupation = prevOccupation;
  this.introduce = function() {
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
  }
  return this; // <-- AND THIS LINE!
}

//-------------------------var this = {}; and return this; can and should be removed...----------------------------

function NinjaConstructor(name, prevOccupation) {
  this.name = name;
  this.prevOccupation = prevOccupation;
  this.introduce = function() {
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
  }
}

//------------...because the new keyword placed before invoking the function will do that for us!-------------------

function NinjaConstructor(name, prevOccupation) {
  this.name = name;
  this.prevOccupation = prevOccupation;
  this.introduce = function() {
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
  }
}
var dylan = new NinjaConstructor('Dylan', 'Construction Worker');

//----------------------------------------------Common Pitfall Code-------------------------------------------------

console.log(this)
//after var dylan ... add:
var nikki = NinjaConstructor('Nikki','Historian');

//----------------------------------------------Common Pitfall Fix---------------------------------------------------

if (!(this instanceof NinjaConstructor)) {
   // the constructor was called without "new".
   return new NinjaConstructor(name, prevOccupation);
}

//---------------------------------------------------End---------------------------------------------------------

