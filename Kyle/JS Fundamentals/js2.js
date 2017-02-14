// JAVASCRIPT FUNDAMENTALS PART II

function standalone(){
  //code
}


var anon = function(){
  //code
}

person = {
  supafunction:function(){
    //code
  }
}

// person.supafuction()
// anon()
// standalone()


function sum(x,y){
  var total = 0;
  for(var i=x; i<=y; i++){
      total += i;
  }
  console.log(total);
  return total;
}

function minimum(array){
  var minimum = array[0];
  for(var i=0; i<array.length; i++){
    if(array[i]<minimum){
      minimum = array[i];
    }
  }
  console.log(minimum);
  return minimum;
}

function average(array){
  var total = 0;
  for(var i=0;i<array.length;i++){
    total += array[i];
  }
  console.log(total/array.length);
  return total/array.length;
}

var sum_variable = function(x,y){
  var total = 0;
  for(var i=x; i<=y; i++){
      total += i;
  }
  console.log(total);
  return total;
}

var mimimum_variable = function(array){
  var minimum = array[0];
  for(var i=0; i<array.length; i++){
    if(array[i]<minimum){
      minimum = array[i];
    }
  }
}

var average_variable = function(array){
  var total = 0;
  for(var i=0;i<array.length;i++){
    total += array[i];
  }
  console.log(total/array.length);
  return total/array.length;
}

var algorithm_object = {

  sum:function sum(x,y){
    var total = 0;
    for(var i=x; i<=y; i++){
        total += i;
    }
    console.log(total);
    return total;
  },

  minimum:function minimum(array){
    var minimum = array[0];
    for(var i=0; i<array.length; i++){
      if(array[i]<minimum){
        minimum = array[i];
      }
    }
    console.log(minimum);
    return minimum;
  },

  average:function average(array){
    var total = 0;
    for(var i=0;i<array.length;i++){
      total += array[i];
    }
    console.log(total/array.length);
    return total/array.length;
  }

}

var person = {
  name:"Kyle Crumpler",
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

person.say_name();
person.say_something('woah dude whaddup?');
person.walk().run().crawl();
console.log(person.distance_traveled);
