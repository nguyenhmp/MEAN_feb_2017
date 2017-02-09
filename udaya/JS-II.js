sumrange = function SumRange(x,y){
  var sum = 0;
if(x<y){
  for(var i =x; i<=y; i++){
    sum = sum+i;
  }
}
if(x>y) {
  for(var i =y; i<=x; i++){
    sum = sum+i;
  }
}
console.log(sum);
}
// sumrange(10,15);

min = function minVal(x){
  var min = x[0];
  for(var i =1; i<x.length; i++){
    if(x[i]<min){
      min = x[i];
    }
  }
  console.log(min);
}

// min([12,4,5,0,-5,-15,87]);

avg = function Avg(w){
  var sum1 = 0;
  var avg;
  for(var k =0; k<w.length;k++){
  sum1+=w[k];
  avg = sum1/w.length;
  }
  // console.log(sum1);
  console.log(avg);
}

// avg([1,2,3,4,5]);

var mathOp = {
  sumRange : sumrange(10,15),
  Minimum : min([12,4,5,0,-5,-15,87]),
  Average : avg([1,2,3,4,5])
}
// console.log(mathOp);

var Person = {
  name : "Udaya",
  distance_travelled: 0
}
var say_name = function(){
  console.log(Person.name);
}
var say_something = function(x){
  console.log(Person.name +" says "+ x );
}
var walk = function (){
  Person.distance_travelled+=3;
  console.log(Person.name +" is walking and the total distance travelled is "+ Person.distance_travelled );
}
var run = function(){
  Person.distance_travelled+=10;
  console.log(Person.name +" is running and the total distance travelled is "+ Person.distance_travelled);
}
var crawl = function (){
  Person.distance_travelled+=1;
  console.log(Person.name +" is crawling and the total distance travelled is "+ Person.distance_travelled);
}
say_name();
say_something("I am cool")
crawl();
run();
walk();
