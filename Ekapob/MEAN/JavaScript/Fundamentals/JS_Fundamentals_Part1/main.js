// Go through each value in the array x, where x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]. Log each value.
x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]
for(var i = 0; i < x.length; i++){
    console.log(x[i]);
}

// Add a new value (100) in the array x using a push method.
x.push(100);
for(var i = 0; i < x.length; i++){
    console.log(x[i]);
}

// Add a new array ["hello", "world", "JavaScript is Fun"] to variable x. Log x in the console and analyze how x looks now.
x.push(["hello", "world", "JavaScript is Fun"]);
for(var i = 0; i < x.length; i++){
    console.log(x[i]);
}

// Create a simple for loop that sums all the numbers between 1 to 500. Have console log the final sum.
var total = 0;
for(var i = 1; i < 501; i++){
    total += i;
}
console.log(total);

// Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the minimum value, and then print it
var arr = [1, 5, 90, 25, -3, 0];
var min = arr[0];
for(var i = 1; i < arr.length; i++){
    if(arr[i] < min){
        min = arr[i];
    }
}
console.log(min);

// Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the average of all of the values, and then print it
var sum = arr[0];
for(var i = 1; i < arr.length; i++){
    sum += i;
}
var avg = sum / arr.length;
console.log(avg);

// Write a for-in loop that will navigate through the object below (or write your own object) and console.log() each key value pair.
var new_ninja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
};
for(var key in new_ninja){
    console.log(new_ninja[key]);
}
