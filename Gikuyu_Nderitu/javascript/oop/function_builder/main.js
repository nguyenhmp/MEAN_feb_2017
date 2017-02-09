





// Basic: Make a function that can be used anywhere in your file and that when invoked will console.log('I am running!'); Give it the name runningLogger.
let runningLogger = function () {
	console.log('I am running');
}


//  Basic: Make a function that is callable, has one parameter and multiplies the value of the parameter by 10 before returning the result.
//			 Give it the name multiplyByTen. Invoke it, passing it the argument 5.
let multiplyByTen = function (multiplicand) {
	return multiplicand * 10
}
console.log(multiplyByTen(5));


//  Basic: Write two functions (stringReturnOne and stringReturnTwo) that each return a different hard-coded string
let stringReturnOne = function () {
	return 'String One'
}

let stringReturnTwo = function () {
	return 'String Two'
}

//  Medium: Write a function named caller that has one parameter. If the argument provided to caller is a function (typeof may be useful),
// 		invoke the argument. Nothing is returned.
let caller = function (arg) {
	if (typeof arg === 'function')
		arg()
}

caller(runningLogger)

//  Medium: Write a function named myDoubleConsoleLog that has two parameters, if the arguments passed to the function are functions,
//		 console.log the value that each, when invoked, returns.
let myDoubleConsoleLog = function (arg1, arg2) {
	if (typeof arg1 === 'function' && typeof arg2 === 'function') {
		console.log(arg1(), arg2());
	}
}
myDoubleConsoleLog(stringReturnOne, stringReturnTwo)


//  Hard: Write a function named caller2 that has one parameter. Have it console.log the string 'starting', wait 2 seconds,
// 		and then invokes the argument if the argument is a function. (setTimeout may be useful for this one.)
//  	The function should then console.log ‘ending?’ and return “interesting”. Invoke this function by passing it myDoubleConsoleLog.
let caller2 = function (arg) {
	console.log('starting');
	setTimeout(function () {
		if (typeof arg === 'function') {
			arg()
		}
	}, 2000)
	console.log('ending?');
	return 'insteresting'
}
console.log(caller2(myDoubleConsoleLog))
