// Properties
// name - set this as your own name
// distance_traveled - set this initially as zero
function personConstructor (name) {
    this.name = name;
    this.distance_traveled = 0;

// Methods
// say_name - should alert the object’s name property

    this.say_name = function () {
        console.log("My name is " + this.name);
        return this
    }

// say_something - have it accept a parameter. This function should then say for example “{{your name}} says ‘I am cool’” if you pass ‘I am cool’ as an argument to this method.
    this.say_something = function (phrase) {
        console.log(this.name + " says, '" + phrase + "'.");
        return this
    }

// walk - have it alert for example “{{your name}} is walking” and increase distance_traveled by 3
    this.walk = function () {
        this.distance_traveled += 3;
        console.log(this.name + " is taking a stroll.");
        console.log("Total distance traveled: " + this.distance_traveled);
        return this
    }

// run - have it alert for example “{{your name}} is running” and increase distance_traveled by 10
    this.run = function () {
        this.distance_traveled += 10;
        console.log(this.name + " is running like the wind!");
        console.log("Total distance traveled: " + this.distance_traveled);
        return this
    }

// crawl - have it alert for example “{{your name}} is crawling” and increase distance_traveled by 1
    this.crawl = function () {
        this.distance_traveled += 1;
        console.log(this.name + " is exhausted and crawling.");
        console.log("Total distance traveled: " + this.distance_traveled);
        return this
    }
}

var Ekapob = new personConstructor("Ekapob");
Ekapob.say_name();
Ekapob.say_something("I'm a coding ninja!");
Ekapob.walk().run().crawl();
