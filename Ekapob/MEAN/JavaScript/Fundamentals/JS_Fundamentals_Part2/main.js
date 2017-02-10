// Ekapob Ukritnukun
// ThaiGQ@gmail.com

// Turn the following problems from JS Fundamentals Part I into functions that take variable inputs

// Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.
var a = 10;
var b = 20;
function totalBetween(floor, ceiling) {
    var sum = 0;
    for (var i = floor; i <= ceiling; i++) {
        sum += i;
    }
    console.log(sum);
}

totalBetween(a, b);

// Write a loop that will go through an array, find the minimum value, and then return it
var x = [2, 3, 7, 12, 0, 834, -3, 23]
function findMin(arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min
}

console.log(x);
console.log(findMin(x));

// Write a loop that will go through an array, find the average of all of the values, and then return it
function findAvg(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var avg = sum / arr.length;
    return avg
}

console.log(findAvg(x));

// Rewrite these 3 as anonymous functions assigned to variables.

// Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.
var sumBetween = function (floor, ceiling) {
    var sum = 0;
    for (var i = floor; i <= ceiling; i++) {
        sum += i;
    }
    console.log(sum);
}

sumBetween(a, b);

// Write a loop that will go through an array, find the minimum value, and then return it
var minValue = function (arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min
}

console.log(minValue(x));

// Write a loop that will go through an array, find the average of all of the values, and then return it
var avgValue = function (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var avg = sum / arr.length;
    return avg
}

console.log(avgValue(x));

// Rewrite these as methods of an object

// Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.

this.addBetween = function (floor, ceiling) {
    var sum = 0;
    for (var i = floor; i <= ceiling; i++) {
        sum += i;
    }
    console.log(sum);
}

// Write a loop that will go through an array, find the minimum value, and then return it
this.minimumValue = function (arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min
}

// Write a loop that will go through an array, find the average of all of the values, and then return it
this.averageValue = function (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var avg = sum / arr.length;
    return avg
}

// Create a JavaScript object called person with the following properties/methods

// Properties
// name - set this as your own name
// distance_traveled - set this initially as zero
var Person = {
    name: "Ekapob",
    distance_traveled: 0,

// Methods
// say_name - should alert the object’s name property

    say_name: function () {
        console.log("My name is " + Person.name);
        return Person
    },

// say_something - have it accept a parameter. This function should then say for example “{{your name}} says ‘I am cool’” if you pass ‘I am cool’ as an argument to this method.
    say_something: function (phrase) {
        console.log(Person.name + " says, '" + phrase + "'");
        return Person
    },

// walk - have it alert for example “{{your name}} is walking” and increase distance_traveled by 3
    walk: function () {
        Person.distance_traveled += 3;
        console.log(Person.name + " is taking a stroll.");
        console.log("Total distance traveled: " + Person.distance_traveled);
        return Person
    },

// run - have it alert for example “{{your name}} is running” and increase distance_traveled by 10
    run: function () {
        Person.distance_traveled += 10;
        console.log(Person.name + " is running like the wind!");
        console.log("Total distance traveled: " + Person.distance_traveled);
        return Person
    },

// crawl - have it alert for example “{{your name}} is crawling” and increase distance_traveled by 1
    crawl: function () {
        Person.distance_traveled += 1;
        console.log(Person.name + " is exhausted and crawling.");
        console.log("Total distance traveled: " + Person.distance_traveled);
        return Person
    }
}

Person.say_name();
Person.say_something("I'm a coding ninja!");
Person.walk().run().crawl();
