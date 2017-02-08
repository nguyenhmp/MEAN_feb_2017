function personConstructor(name){
	var person = {
		name: name,
		distance_traveled: 0,
		say_name: function(){
			console.log(person.name);
		},
		say_something: function(phrase){
			console.log(`${person.name} says, "${phrase}"`);
		},
		walk: function(){
			person.distance_traveled += 3;
			console.log(`${person.name} is walking.`);
			return person;
		},
		run: function(){
			person.distance_traveled += 10;
			console.log(`${person.name} is running!`);
			return person;
		},
		crawl: function(){
			person.distance_traveled += 1;
			console.log(`${person.name} is crawling...`);
			return person;
		}
	}
	return person;
}

function ninjaConstructor(name, cohort){
	// var name = 'Joey';
	// var cohort = 'MEAN';
	// var ninja = {
	// 	name: name,
	// 	cohort: cohort,
	// 	beltLevel: 'Yellow',
	var ninja = {}
	ninja.name = name;
	ninja.cohort = cohort;
	ninja.beltLevel = 'Yellow';
	ninja.levelUp = function(){
			if(ninja.beltLevel == 'Yellow'){
				ninja.beltLevel = 'Gold';
				console.log(`Congratulations ${ninja.name}! You have successfully attained the ${ninja.beltLevel}!`)
				return ninja;
			}
			if(ninja.beltLevel == 'Gold'){
				ninja.beltLevel = 'Orange';
				console.log(`Congratulations ${ninja.name}! You have successfully attained the ${ninja.beltLevel}!`)
				return ninja;
			}
			if(ninja.beltLevel == 'Orange'){
				ninja.beltLevel = 'Green';
				console.log(`Congratulations ${ninja.name}! You have successfully attained the ${ninja.beltLevel}!`)
				return ninja;
			}
			if(ninja.beltLevel == 'Green'){
				ninja.beltLevel = 'Blue';
				console.log(`Congratulations ${ninja.name}! You have successfully attained the ${ninja.beltLevel}!`)
				return ninja;
			}
			if(ninja.beltLevel == 'Blue'){
				ninja.beltLevel = 'Purple';
				console.log(`Congratulations ${ninja.name}! You have successfully attained the ${ninja.beltLevel}!`)
				return ninja;
			}
			if(ninja.beltLevel == 'Purple'){
				ninja.beltLevel = 'Brown';
				console.log(`Congratulations ${ninja.name}! You have successfully attained the ${ninja.beltLevel}!`)
				return ninja;
			}
			if(ninja.beltLevel == 'Brown'){
				ninja.beltLevel = 'Red';
				console.log(`Congratulations ${ninja.name}! You have successfully attained the ${ninja.beltLevel}!`)
				return ninja;
			}
			if(ninja.beltLevel == 'Red'){
				ninja.beltLevel = 'Black';
				console.log(`Congratulations ${ninja.name}! You have successfully attained the ${ninja.beltLevel}!`)
				return ninja;
			}
			if(ninja.beltLevel == 'Black'){
				console.log(`${ninja.name} has reached perfect mastery of their discipline! The Black Belt!!!`)
				return ninja;
			}
		}
		return ninja;
	}
	joey = ninjaConstructor('Joey','MEAN');
	console.log(joey.levelUp());

/*
function ninjaConstructor(name, cohort){
  var ninja = {}
  var belts = ["yellow", "red", "black"]
  ninja.name = name;
  ninja.cohort = cohort;
  ninja.beltLevel = 0;
  ninja.levelUp = function(){
    if (ninja.beltLevel < 2){
      ninja.beltLevel += 1;
      ninja.belt = belts[ninja.beltLevel];
    }
    return ninja
  }
  ninja.belt = belts[ninja.beltLevel];
  return ninja;
}*/