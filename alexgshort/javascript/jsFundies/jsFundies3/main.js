function personConstructor(name){
    person = {
        name: name,
        distance_traveled: 0,
        say_name: ()=>{console.log(name)},
        say_something: (saying)=>{console.log(`${name} says: ${saying}`)},
        walk: ()=>{
                console.log(`${name} is walking.`);
                person.distance_traveled += 3;
            },
        run: ()=>{
                console.log(`${name} is running.`);
                person.distance_traveled += 10;
            },
        crawl: ()=>{
                console.log(`${name} is crawling.`);
                person.distance_traveled += 1;
        }
    }
    return person;
}

myPerson = personConstructor('John');
myPerson.say_name();
console.log(myPerson.distance_traveled);
myPerson.run();
myPerson.walk();
console.log(myPerson.distance_traveled);

//--------------------------------------

function ninjaConstructor(name, cohort){
    ninja = {
        name: name,
        cohort: cohort,
        belt_level: 'yellow',
        levelUp: ()=>{
            if(ninja.belt_level === 'black'){
                console.log('Black is as high as it gets.');
            }
            if(ninja.belt_level === 'red'){
                ninja.belt_level = 'black';
            }
            if(ninja.belt_level === 'yellow'){
                ninja.belt_level = 'red';
            }
        }
    }
    return ninja;
}

myNinja = ninjaConstructor('Liu', 'Jan 17');
console.log(myNinja.name);
console.log(myNinja.cohort);
console.log(myNinja.belt_level);
myNinja.levelUp();
console.log(myNinja.belt_level);
