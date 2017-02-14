	x = [3,5, "Dojo", "rocks", "Michael", "sensei"]
	for(var i=0; i < x.length; i++){
		console.log(x[i]);
	}
	x.push(100)
	console.log(x)

	newarr = ["hello", "world", "JavaScript is Fun"]
	concatted = x.concat(newarr)
	console.log(concatted)



	var sum = 0
	for(i = 0; i <= 500; i++){
		sum += i
	}
	console.log(sum)

	arr = [1, 5, 90, 25, -3, 0]
	var min = arr[0]
	for(i = 0; i < arr.length; i++){

		if(arr[i] < min){
			min = arr[i]
		}
	}
	console.log(min)

	a = [1, 5, 90, 25, -3, 0]
	var sum = 0
	for(i = 0; i < arr.length; i++){
		sum += arr[i]
	}
	var avg = sum / arr.length
	console.log(avg)


var new_ninja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}
for(key in new_ninja){
	console.log(key, ":", new_ninja[key])
}