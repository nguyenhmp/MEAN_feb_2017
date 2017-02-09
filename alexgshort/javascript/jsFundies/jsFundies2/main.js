function sumInts(startInt, endInt){
    var sum = 0;
    for(var i = startInt; i <= endInt; i++){
        sum += i;
    }
    console.log(sum);
}

function arrayMin(array){
    return Math.min(...array);
}

function arrayAverage(array){
    var sum = 0;
    var avg = 0;
    for(var i = 0; i < array.length; i++){
        sum += arr[i];
    }
    avg = sum / array.length;
    return avg;
}
//------------------------------------------------------
sumIntsFunc = (startInt, endInt)=>{
    var sum = 0;
    for(var i = startInt; i <= endInt; i++){
        sum += i;
    }
    console.log(sum);
}

arrayMinFunct = (array)=>{
    return Math.min(...array);
}

arrayAverageFunct = (array)=>{
    var sum = 0;
    var avg = 0;
    for(var i = 0; i < array.length; i++){
        sum += arr[i];
    }
    avg = sum / array.length;
    return avg;
}
//---------------------------------------------------
function functionObject(){
    this.sumIntsFunc = (startInt, endInt)=>{
        var sum = 0;
        for(var i = startInt; i <= endInt; i++){
            sum += i;
        }
        console.log(sum);
    }

    this.arrayMinFunct = (array)=>{
        return Math.min(...array);
    }

    this.arrayAverageFunct = (array)=>{
        var sum = 0;
        var avg = 0;
        for(var i = 0; i < array.length; i++){
            sum += arr[i];
        }
        avg = sum / array.length;
        return avg;
    }
}
//------------------------------------------------------
function Person(){
    this.name = "Alex";
    this.distance = 0;

    this.say_name = ()=>{console.log(this.name)};
    this.say_something = (saying)=>{console.log(`${this.name} says ${saying}`)};
    this.walk = ()=>{
        this.distance += 3;
        console.log(`${this.name} is walking.`);
    }
    this.run = ()=>{
        this.distance += 10;
        console.log(`${this.name} is running.`);
    }
    this.crawl = ()=>{
        this.distance += 1;
        console.log(`${this.name} is crawling`);
    }
}

var myPerson = new Person();
myPerson.say_name();
myPerson.say_something("It's a robot.");
myPerson.name = "Donkey";
myPerson.say_name();
console.log(myPerson.distance);
myPerson.run();
myPerson.crawl();
console.log(myPerson.distance);
