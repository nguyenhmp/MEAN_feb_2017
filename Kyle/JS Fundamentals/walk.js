// console.log("NOW")
// console.log("Declaring and assigning variable 'ninja'")
// var ninja = 'Libby'
//
// setTimeout(function myCallBackFunction(){
//   console.log("LATER:")
//   console.log(ninja, "LATER"), 2000
// })
//
// console.log("Printing ninja value")
// console.log(ninja, "NOW")

// 1. NOW 2. Declaring and assigning variable 'ninja' 3. Printing ninja value 4. Libby NOW 5. LATER, LIBBY LATER


// Remember that new and better tools are emerging to write asynchronous code! But for now, we're going to focus on the callback function.
//
// var a = 2
// // var b = function() { console.log('yes, I am a callback!') }
// //
// // function doSomething(possibleCallback) {
// //   if (typeof(possibleCallback) === 'function'){
// //     console.log('possibleCallback is a function!')
// //     possibleCallback() // we can invoke the parameter if it happens to be a function!
// //   }
// //   else {
// //     console.log('possibleCallback:', possibleCallback, 'is not a function')
// //   }
// // }
// //
// // doSomething(b)
// // doSomething('string')
//
// // Callbacks, especially those linked to AJAX requests, can help us create a more seamless user experience on a web page because we can send and receive data and update the DOM without needing to refresh the page.
//
//
// // THE FOLLOWING IS AN EXAMPLE OF USING CALLBACKS FOR DELEGATION!!!
// function leadBootcamp(language, leader){
//   var outcome = leader(language)
//   console.log(outcome)
// }
//
// function Mike(language){
//   var success = 'successful leader'
//   var languages = {
//     javascript:success,
//     PHP:'successful leader',
//     Python:'successful leader',
//     Ruby:'successful leader',
//   }
//   if(languages[language]){
//     return languages[language]
//   }
//   else{
//     return 'maybe not yet'
//   }
// }
//
// leadBootcamp('javascript', Mike)


// This is a function that just prints the result of another list of instructions
// function printResult(doSomething){
//   var result = doSomething()
//   console.log(result)
// }
// printResult(function returnFive(){ return 5 }) // this should print '5'
//
// // Pro Tip: JavaScript allows us to pass anonymous functions as callbacks, but when we are debugging giving them a name is very useful
//
// function each(arr, callback){
//   // loop through the array
//   for(var i=0; i<arr.length; i++){
//     callback(arr[i])
//   }
// }
//
// each([1,2,3], function(num) { console.log(num+" I am from the callback!") })
