function runningLogger(){
    console.log("I am running!");
}

function multiplyByTen(num){
    return num * 10;
}

multiplyByTen(5);

function stringReturnOne(){
    return "This is string one.";
}

function stringReturnTwo(){
    return "This is string two.";
}

function caller(arg1){
    if (typeof(arg1) === "function"){
        arg1();
    }
}

function myDoubleConsoleLog(arg1, arg2){
    if (typeof(arg1) === "function"){
        console.log(arg1());
    }
    if (typeof(arg2) === "function"){
        console.log(arg2());
    }
}

function caller2(arg1){
    console.log('starting');
    if(typeof(arg1) === "function"){
        setTimeout(arg1, 2000, stringReturnOne, stringReturnTwo);
        console.log('ending');
    }
    return "interesting";
}

console.log(caller2(myDoubleConsoleLog));
