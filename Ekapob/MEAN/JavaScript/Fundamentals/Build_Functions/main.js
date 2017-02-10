// Basic: Make a function that can be used anywhere in your file and that when invoked will console.log('I am running!'); Give it the name runningLogger.
function runningLogger() {
    console.log("I am running!");
}

// Basic: Make a function that is callable, has one parameter and multiplies the value of the parameter by 10 before returning the result. Give it the name multiplyByTen. Invoke it, passing it the argument 5.
function multiplyByTen(value) {
    return value*10;
}
console.log(multiplyByTen(5));

// Basic: Write two functions (stringReturnOne and stringReturnTwo) that each return a different hard-coded string
function stringReturnOne() {
    return "Victory!!!"
}

function stringReturnTwo() {
    return "I think?"
}

// Medium: Write a function named caller that has one parameter. If the argument provided to caller is a function (typeof may be useful), invoke the argument. Nothing is returned.
function caller(paramOne) {
    if (typeof(paramOne) === "function") {
        paramOne();
    }
}
caller(stringReturnOne);

// Medium: Write a function named myDoubleConsoleLog that has two parameters, if the arguments passed to the function are functions, console.log the value that each, when invoked, returns.
function myDoubleConsoleLog(One, Two) {
    if (typeof(One) === "function" && typeof(Two) === "function") {
        console.log(One());
        console.log(Two());
    }
}

myDoubleConsoleLog(stringReturnOne, stringReturnTwo);

// Hard: Write a function named caller2 that has one parameter. Have it console.log the string 'starting', wait 2 seconds, and then invokes the argument if the argument is a function. (setTimeout may be useful for this one.) The function should then console.log ‘ending?’ and return “interesting”. Invoke this function by passing it myDoubleConsoleLog.
function caller2(value) {
    console.log("Starting...");
    setTimeout(function() {
        if (typeof(value) === "function") {
            value();
            runningLogger();
        }
    }, 2000);
    console.log("ending?");
    return "interesting"
}

console.log(caller2(myDoubleConsoleLog));
