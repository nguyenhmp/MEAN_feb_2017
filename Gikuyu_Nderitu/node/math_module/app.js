'use strict'
const mathy  require('./mathlib');

let mathobj = new mathy()
console.log(mathobj.add(5,10));
console.log(mathobj.multiply(5,10));
console.log(mathobj.square(5));
console.log(mathobj.random(5,10));
