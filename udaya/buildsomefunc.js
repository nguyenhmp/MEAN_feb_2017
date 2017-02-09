
// Basic: Make a function that can be used anywhere in your file and that when invoked will console.log('I am running!'); Give it the name runningLogger.
runningLogger();
function runningLogger(){
  console.log('I am running');
}

// Basic: Make a function that is callable, has one parameter and multiplies the value of the parameter by 10 before returning the result. Give it the name multiplyByTen. Invoke it, passing it the argument 5.

MultiplyByten(5);
function MultiplyByten(x){
  console.log(x * 10);
}

// Basic: Write two functions (stringReturnOne and stringReturnTwo) that each return a different hard-coded string

function stringReturnOne(){
  console.log("fyuehfehfyerfbej");
}

function stringReturnTwo(){
  console.log("hdvjvdhj,fd,bhjhd");
}

// Medium: Write a function named caller that has one parameter. If the argument provided to caller is a function (typeof may be useful), invoke the argument. Nothing is returned.

function caller(y){
if (typeof(y) == "undefined" ){
  // console.log(y);
  return y;
  // console.log("hgwghfdhgfdw");
}
else{
  console.log(y);
}
}

// Medium: Write a function named myDoubleConsoleLog that has two parameters, if the arguments passed to the function are functions, console.log the value that each, when invoked, returns.

function DoubleConsoleLog(z,w){
if (typeof(z) && typeof(w)  == "undefined"){
  return z;
  return w;
}
}

// Hard: Write a function named caller2 that has one parameter. Have it console.log the string 'starting', wait 2 seconds, and then invokes the argument if the argument is a function. (setTimeout may be useful for this one.) The function should then console.log ‘ending?’ and return “interesting”. Invoke this function by passing it myDoubleConsoleLog.

function caller2(n){
  console.log("starting")
  setTimeout(function() { caller2(n) }, 1000);
  if (typeof(n) == "undefined"){
    console.log("ending?");
    return "interesting";
    // return n;
  }
}


stringReturnOne();
runningLogger();
stringReturnTwo();
caller(stringReturnOne());
DoubleConsoleLog(runningLogger(),stringReturnTwo());

caller2(DoubleConsoleLog(runningLogger(),stringReturnTwo()));
