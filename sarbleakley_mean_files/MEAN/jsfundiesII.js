

// function standalone(){
// 	// code
// }

// var anon = function(){
// 	// code
// }

// person = {
// 	supafunction;function(){
// 		// code
// 	}
// }

// function sum(x,y){
// 	var total = 0;
// 	for(var i=x; i<=y; i++){
// 		total += i;
// 	}
// 	return total;
// }

// console.log(sum(1, 5))


var array = [5,2,-5,6,8,9,-4,4]
// function loopmin(arr){
// 	var min = arr[0]
// 	for(var i = 0; i < arr.length; i++){
// 		if(arr[i] < min){
// 			min = arr[i] 
// 		}
	
// 	}
// 	return min
// }

// console.log(loopmin(array))

// function loopavg(arr){
// 	var sum = 0;
// 	for(var i = 0; i < arr.length; i++){
// 		sum += arr[i]
// 	}
// 	var avg = sum / arr.length
// 	return avg
// }

// console.log(loopavg(array))


var algo_object = { 
	sum:function sum(x,y){
	var total = 0;
	for(var i=x; i<=y; i++){
		total += i;
	}
	return total;
},
	min:function loopmin(arr){
	var min = arr[0]
	for(var i = 0; i < arr.length; i++){
		if(arr[i] < min){
			min = arr[i] 
		}
	
	}
	return min
},
	avg:function loopavg(arr){
	var sum = 0;
	for(var i = 0; i < arr.length; i++){
		sum += arr[i]
	}
	var avg = sum / arr.length
	return avg
}
}

console.log(algo_object.sum(5,100))
console.log(algo_object.min(array))
console.log(algo_object.avg(array))


var person = {
	name:"Sonya Bleakley",
	distance_traveled:0,
	say_name:function(){
		console.log(person.name+' says '+something)
		return this;
	}
	,
	walk:function(){
		console.log(person.name+' is walking');
		person.distance_traveled += 3
		return this;
	},
	run:function(){
		console.log(person.name+' is running');
		person.distance_traveled += 10;
		return this;
	},
	crawl:function(){
		console.log(person.name+' is crawling');
		person.distance_traveled += 1
		return this;
	}
	}
}