function PersonConstructor(name){
  var person = {
    name : name,
    distance_travelled: 0,
    say_name : function(){ console.log(person.name);} ,
    say_something : function(x){ console.log(person.name +" says "+ x );} ,
    walk :function(){ person.distance_travelled+=3; console.log(person.name +" is walking and the total distance travelled is "+ person.distance_travelled );},
    run :function(){ person.distance_travelled+=10; console.log(person.name +" is running and the total distance travelled is "+ person.distance_travelled); },
    crawl : function (){ person.distance_travelled+=1; console.log(person.name +" is crawling and the total distance travelled is "+ person.distance_travelled);}
  }
  // console.log(person);
  person.say_name();
  person.say_something("This is Cool");
  person.walk();
  person.run();
  person.run();
}

PersonConstructor('Udaya');

function NinjaConstructor(name,cohort){
  var ninja = {
    name : console.log(name),
    cohort: console.log(cohort),
    belt_level : "Yellow",
    levelup : function(){ ninja.belt_level = "Red";  }
  }
  // console.log(person);
  ninja.name;
  ninja.cohort;
  ninja.levelup();
  console.log(ninja.belt_level);
  // ninja.belt_level;
}

NinjaConstructor('Udaya','december');




// person.say_name()
// var say_name = function(){
//   console.log(Person.name);
// }
// var say_something = function(x){
//   console.log(Person.name +" says "+ x );
// }
// var walk = function (){
//   Person.distance_travelled+=3;
//   console.log(Person.name +" is walking and the total distance travelled is "+ Person.distance_travelled );
// }
// var run = function(){
//   Person.distance_travelled+=10;
//   console.log(Person.name +" is running and the total distance travelled is "+ Person.distance_travelled);
// }
// var crawl = function (){
//   Person.distance_travelled+=1;
//   console.log(Person.name +" is crawling and the total distance travelled is "+ Person.distance_travelled);
// }
