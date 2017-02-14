var _ = {
   map: function(array, callback) {
    for (var i = 0; i < array.length; i++){
      array[i] = callback(array[i])
    }
   },
   reduce: function(array, callback, memo){ 
      var el = 0;
      if (!memo){
        memo = array[0];
        el = 1;
      }
      for (var i = el; i < array.length; i++){
        memo = callback(array[i], memo);
      }
      return memo;
  },
   find: function(array, callback) { 
    for (var i = 0; i < array.length; i ++){
      if (callback(array[i])){
        return array[i]
        }
      }
    },
  filter: function(array, callback) { 
    var tempArray =[];
      for (var i = 0; i < array.length; i++){
        if (callback(array[i])){
          tempArray.push(array[i]);
        }
      }
      return tempArray;
   },
   // reject is the opposite of filter?
   reject: function(array, callback) {
    var tempArray = [];
      for (var i = 0; i < array.length; i++){
        if(!callback(array[i])){
          tempArray.push(array[i])
        }
      } 
      return tempArray;
     // code here;
   }
 }


var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(odds)
 var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].

var array = [3,4,5]
console.log(_.find(array, function callback(x){return x == 4;}));
console.log(_.reduce(array, function callback(x, memo){return x + memo;}));