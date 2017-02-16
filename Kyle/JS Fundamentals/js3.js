function personConstructor(name){
  var person = {
    name:name,
    distance_traveled:0,
    say_name:function(){
      console.log(person.name);
      return this;
    },
    say_something:function(something){
      console.log(person.name+' says '+something)
      return this;
    },
    walk:function(){
      console.log(person.name+' is walking');
      person.distance_traveled += 3;
      return this;
    },
    run:function(){
      console.log(person.name+' is running');
      person.distance_traveled += 10;
      return this;
    },
    crawl:function(){
      console.log(person.name+' is crawling');
      person.distance_traveled += 1;
      return this;
    }
  }
  return person;
}
// var kyle = personConstructor('Kyle');
// var dylan = personConstructor('Dylan');
// var jamey = personConstructor('Jamey');
// console.log(kyle.name);
// console.log(dylan.name);
// console.log(jamey.name);
// console.log(kyle.run().run().distance_traveled); // 20
// console.log(dylan.walk().walk().run().distance_traveled); // 16
// console.log(kyle.distance_traveled); // still 20

function ninjaConstructor(name){
  var ninja = {
    name:name,
    cohort: ['spring', 'summer', 'winter', 'fall'],
    belt_level: 'yellow belt',
    level_up:function(){
      this.belt_level = 'black belt'
      return "You've leveled up!"
    }
  }
  return ninja
}

// var kyle = ninjaConstructor('Kyle');
// console.log(kyle.belt_level);
// console.log(kyle.level_up());
// console.log(kyle.belt_level);
