'use strict'
let x = [3,5,"Dojo","rocks","Michael","Sensei"]

for(let val in x){
	console.log(x[val]);
}

x.push(100)

const inner = ["hello", "world", "JavaScript is Fun"]

x.push(inner)

console.log(x);
let sum = 0
for(let i = 1; i <= 500; i++) sum+= i

console.log(sum);

const arr = [1, 5, 90, 25, -3, 0]

let min = arr[0]

for(let val in arr){
	if(arr[val] < min) min = arr[val]
}

console.log(min);

let total = 0
for(let val in arr){
	sum += arr[val]
}

console.log(sum/arr.length);

const new_ninja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for (let val in new_ninja){
	console.log(val, new_ninja[val]);
}
