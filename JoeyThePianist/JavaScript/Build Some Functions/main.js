function runningLogger(){
	console.log("I am running!");
}

var multiplyByTen = function(x){
	if (typeof(x) == "number"){
		x = x*10;
		return x;
	}
}

function stringReturnOne(){
	var stringer = "This is string one."
	return stringer;
}

function stringReturnTwo(){
	var stringer = "This is string two."
	return stringer;
}

function caller(z){
	if (typeof(z) == 'function'){
		z();
	}
}

function myDoubleConsoleLog(a,b){
	if (typeof(a) == 'function' && typeof(b) == 'function'){
	console.log(a(), b());
	}
}
// myDoubleConsoleLog(stringReturnOne, stringReturnTwo);

function caller2(c){
	console.log("starting")
	var j = setTimeout(function(){
		if (typeof(c) == 'function'){
			c(stringReturnOne, stringReturnTwo);
		}
	}, 0);
	console.log("ending?")
	return("interesting")
}
caller2(myDoubleConsoleLog);