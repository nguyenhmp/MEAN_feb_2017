PROBLEM 1

Original:

console.log(first_variable);
var first_variable = "Yipee I was first!";
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
console.log(first_variable);

Interpreter:

var first_variable;
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
console.log(first_variable);
first_variable = "Yipee I was first!";
console.log(first_variable);

Output prediction:
undefined
Yipee I was first!


PROBLEM 2

Original:

var food = "Chicken";
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";       // CAREFUL!
  console.log(food);
}
eat();
console.log(food);

Interpreter:

var food;
function eat() {
  var food;       // CAREFUL!
  food = "half-chicken";
  console.log(food);
  food = "gone";
  console.log(food);
}
food = "Chicken";
eat();
console.log(food);

Output prediction:

half-chicken
gone
Chicken

PROBLEM 3

Original:

var new_word = "NEW!";
function lastFunc() {
  new_word = "old";
}
console.log(new_word);

Interpreter:

var new_word;
function lastFunc() {
  new_word = "old";
}
new_word = "NEW!";
console.log(new_word);

Output prediction:

NEW!
