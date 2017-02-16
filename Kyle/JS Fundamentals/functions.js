function runningLogger(){
  console.log('I am running!');
}
function multiplyByTen(num){
  return num*10;
}
// console.log(multiplyByTen(5));
function stringReturnOne(){
  return "this is the first string returned"
}
function stringReturnTwo(){
  return "this is the second returned string"
}

function caller(param){
  if (typeof(param) === 'function'){
    param();
  }
}
caller(stringReturnOne);
function myDoubleConsoleLog(param1, param2){
  if(typeof(param1) === 'function' && typeof(param2) === 'function'){
    console.log(param1());
    console.log(param2());
  }
}
// myDoubleConsoleLog(stringReturnOne, stringReturnTwo);

function caller2(param){
  console.log('starting')
  if(typeof(param) === 'function'){
    setTimeout(function(){
      param(stringReturnOne,stringReturnTwo);
    }, 2000);
    setTimeout(function(){
      console.log('ending?')
    },2000);
    return 'interesting'
  }
}

caller2(myDoubleConsoleLog);
