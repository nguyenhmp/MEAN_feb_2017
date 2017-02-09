// EXAMPLE PROBLEM
// var hello = "interesting";
// function example() {
//   var hello = "hi!";
//   console.log(hello);
// }
// example();
// console.log(hello);
// --------------------------------------------------
// EXAMPLE ANSWER
// declarations get hoisted
// var hello;                 
// function example() {       
//   var hello;               
//   hello = "hi";            
//   console.log(hello);       
// }
// //assignments and invocation maintain order
// hello = "interesting";     
// example();                        
// console.log(hello);
// --------------------------------------------------
// PROBLEM 1
// console.log(first_variable);
// var first_variable = "Yipee I was first!";
// function firstFunc() {
//   first_variable = "Not anymore!!!";
//   console.log(first_variable);
// }
// console.log(first_variable);
// --------------------------------------------------
// ANSWER 1
// console.log(first_variable);
// var first_variable;
// first_variable = "Yipee I was first!"
// function firstFunc() {
// 	first_variable;
// 	first_variable = "Not anymore!!!";
// 	console.log(first_variable);
// }
// console.log(first_variable);
// --------------------------------------------------
// PROBLEM 2
// var food = "Chicken";
// function eat() {
//   food = "half-chicken";
//   console.log(food);
//   var food = "gone";       // CAREFUL!
//   console.log(food);
// }
// eat();
// console.log(food);
// --------------------------------------------------
// ANSWER 2
// var food;
// food = "Chicken"
// food;
// console.log(food);
// food = "half-chicken";
// function eat(){
// 	var food;
// 	food = "gone";
// 	console.log(food);
// }
// eat();
// console.log(food);
// ---------------------------------------------------
// PROBLEM 3
// var new_word = "NEW!";
// function lastFunc() {
//   new_word = "old";
// }
// console.log(new_word);
// --------------------------------------------------
// ANSWER 3
// var new_word;
// new_word = "NEW!"
// function lastFunc() {
// 	new_word;
// 	new_word = "old";
// }
// console.log(new_word);
//--------------------------------------------------