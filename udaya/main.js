var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];
for (y in x){
  console.log(x[y]);
}
// for(var i =0; i<x.length; i++){
//   console.log(x[i]);
// }
x.push(100);
console.log(x);
x = ["hello", "world", "JavaScript is Fun"];
console.log(x);
var sum = 0;
for(var i =1; i<501; i++){
sum+=i;
}
console.log(sum);
// Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the minimum value, and then print it
var z = [1, 5, 90, 25, -3, 0];
var min = z[0];
for(var p = 1; p<z.length; p++){
if(z[p]<min){
  min = z[p];
}
console.log(min);
}
// Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the average of all of the values, and then print it
var w = [1, 5, 90, 25, -3, 0];
var sum1 = 0;
var avg;
for(var k =0; k<w.length;k++){
sum1+=w[k];
avg = sum1/w.length;
}
console.log(avg);

var new_ninja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for (var key in new_ninja){
  if (new_ninja.hasOwnProperty(key) ) {
    console.log(key +":"+ new_ninja[key]);

  }
}
