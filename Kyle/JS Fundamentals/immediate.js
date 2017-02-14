// (function(param1, param2){
//   console.log(param1)
//   setTimeout(function(){console.log(console.log(param2))}, 2000)
// }('hi', 'ok'))
// console.log('YEssss')

(function(global){
  console.log(window)
  console.log(global)
}) (window))
