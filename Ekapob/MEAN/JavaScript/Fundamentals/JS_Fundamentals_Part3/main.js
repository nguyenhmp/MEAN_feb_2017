// Ekapob Ukritnukun
// ThaiGQ@gmail.com

// Create a function that takes in one parameter called “name” and returns an object that looks similar to the person object from JS Fundamentals Part II.
// The returned object should have a name property that is set to the value of the name argument that was passed into the function.
function personConstructor(name) {
    var person = {};
    person.name = name;

// Each returned person object should also have the other properties from JS Fundamentals Part II:
// distance_traveled - set this initially as zero
    person.distance_traveled = 0;

// say_name - should alert the object’s name property
    person.say_name = function () {
        console.log("My name is " + person.name);
        return person
    }

// say_something - have it accept a parameter. It should then say for example “Jay says ‘I am cool’” if you pass ‘I am cool’ as an argument to this method.
    person.say_something = function (phrase) {
        console.log(person.name + " says, '" + phrase + "'");
        return person
    }

// walk - have it alert for example “Jay is walking” and increase distance_traveled by 3
    person.walk = function () {
        person.distance_traveled += 3;
        console.log(person.name + " is taking a stroll.");
        console.log("Total distance traveled: " + person.distance_traveled);
        return person
    }

// run - have it alert for example “Jay is running” and increase distance_traveled by 10
    person.run = function () {
        person.distance_traveled += 10;
        console.log(person.name + " is running like the wind!");
        console.log("Total distance traveled: " + person.distance_traveled);
        return person
    }

// crawl - have it alert for example “Jay is crawling” and increase distance_traveled by 1
    person.crawl = function () {
        person.distance_traveled += 1;
        console.log(person.name + " is exhausted and crawling.");
        console.log("Total distance traveled: " + person.distance_traveled);
        return person
    }
    return person
}

// var Ekapob = personConstructor("Ekapob");
// Ekapob.say_name();
// Ekapob.say_something("I learned a new way to create objects!");
// Ekapob.walk();
// Ekapob.run();
// Ekapob.crawl();
// console.log(Ekapob.distance_traveled);

// Now create a ninjaConstructor that can be used to create Ninjas that each has a name, cohort, and belt-level. Give all of the Ninjas a “levelUp” method that increases their belt-level (Have all ninjas start at a yellow-belt).

function ninjaConstructor(name, cohort = "eta") {
    var ninja = {};
    var belts = ["yellow", "red", "black"]
    ninja.name = name;
    ninja.cohort = cohort;
    ninja.belt_level = 0;
    ninja.levelUp = function () {
        if (ninja.belt_level < 2) {
            ninja.belt_level += 1;
            ninja.belt = belts[ninja.belt_level];
            console.log(ninja.name + " is now a " + ninja.belt + " belt!");
            return ninja
        }
        else {
            console.log(ninja.name + " is already a ninja master!");
            return ninja
        }
    }
    ninja.belt = belts[ninja.belt_level];
    return ninja
}

var Ekapob = ninjaConstructor("Ekapob");
console.log(Ekapob.belt);
Ekapob.levelUp().levelUp().levelUp();
console.log(Ekapob.belt);
