function sumInts(intOne, intTwo){
	var sum = 0;
	for(i = intOne; i <= intTwo; i++){
		console.log("iterator:", i);
		sum = sum + i;
		console.log("sum:", sum);
	}
}

function findMinh(arr){
	if(arr) { 					//Checks for passed parameters.
		var minh = 0;
		for(i = 0; i < arr.length; i++){
			if(arr[i] < minh){
				minh = arr[i];
			}
		}
	return(minh);
	}
}

function findAvg(arr){
	var avg = 0;
	var sum = 0;
	for(i = 0; i < arr.length; i++){
		sum = sum + arr[i];
	}
	avg = sum / arr.length;
	return(avg);
}

var sumInts = function(intOne, intTwo){
	var sum = 0;
	for(i = intOne; i <= intTwo; i++){
		console.log("iterator:", i);
		sum = sum + i;
		console.log("sum:", sum);
	}
}

var findMinh = function(arr){
	if(arr){ 					//Checks for passed parameters.
		var minh = 0;
		for(i = 0; i < arr.length; i++){
			if(arr[i] < minh){
				minh = arr[i];
			}
		}
	return(minh);
	}
}

var findAvg = function(arr){
	var avg = 0;
	var sum = 0;
	for(i = 0; i < arr.length; i++){
		sum = sum + arr[i];
	}
	avg = sum / arr.length;
	console.log(avg);
}

//---------------JOEY LEARNS TO MAKE AN OBJECT!--------------------------------

var myObject = { //Creates the object variable? 
	sumInts: function(intOne, intTwo){ //appears to be similar to a dictionary. The name of the function being the key and the function itself existing as the value.
		var sum = 0;
		for(var i = intOne; i <= intTwo; i++){
			sum += i;
		}
		return sum;
	}, //end sumInts
	findMinh: function(arr){
		if(arr){
			var minh = 0;
			for(i = 0; i < arr.length; i++){
				if(arr[i] < minh){
					minh = arr[i];
				}
			}
			return minh;
		}
	}, //end findMinh
	findAvg: function(arr){
		var avg = 0;
		var sum = 0;
		for(i = 0; i < arr.length; i++){
			sum += arr[i];
		}
		avg = sum / arr.length;
		return avg;
	} //end findAvg
} //end myObject Call a specific function like so. myObject.findAvg([1,2,3])

var person = {
	name: "Joey",
	distance_traveled: 0,
	say_name: function(){
		console.log(person.name);
	},
	say_something: function(phrase){
		console.log(`${person.name} says: ${phrase}`);
	},
	walk: function(){
		person.distance_traveled += 3;
		alert(`${person.name} is walking.`);
		return person;
	},
	run: function(){
		person.distance_traveled += 10;
		alert(`${person.name} is running!`);
		return person;
	},
	crawl: function(){
		person.distance_traveled += 1;
		alert(`${person.name} is crawling...`);
		return person;
	}
}
console.log(person)