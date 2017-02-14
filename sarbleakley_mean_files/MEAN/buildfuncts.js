function runningLogger(){
	console.log('I am running!')
}

runningLogger()

function multiplyByTen(val){
	x = val * 10;
	console.log(x)
}

multiplyByTen(5)

function stringReturnOne(){
	return 'hardcodedstring1'
}


function stringReturnTwo(){
	return 'hardcodedstring2'
}


function caller(parm){
	if(typeof(parm) == 'function'){
		return parm();
	}
	else{
		return false;
	}
}

console.log(caller('not a function'))

function myDoubleConsoleLog(parm1, parm2){
	if(typeof(parm1) == 'function'){
		console.log(parm1())
	}
	if(typeof(parm2) == 'function'){
		console.log(parm2())
	} 
}


// console.log(myDoubleConsoleLog(runningLogger, stringReturnOne))

function caller2(param){
	console.log('starting');
	
	setTimeout(function(){
		console.log('hi')
		if(typeof(param) == 'function'){
			console.log('ending?');
		}else{
			console.log(param)
		}
	}, 2000);
	
	return "interesting"
}

console.log(caller2(myDoubleConsoleLog(stringReturnOne, stringReturnTwo)))
