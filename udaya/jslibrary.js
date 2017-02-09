// Look at _.filter when it is invoked.
//
//     How many arguments was _.filter passed?
                // 2 arguments.

//     What are those arguments?

              // one was array and other was function

//     If you had to classify them, what names would you give each of them?

                //_.filter(arr,callback);

//     Given your answers (especially #3), place those names into your filter as parameters.


var _ = {
   map: function(arr, callback ) {
     var newarr=[];
     for(var i =0; i<arr.length; i++){
       var num = arr[i];

       newarr.push(callback(num));
     }
     return newarr;
     //code here;
   },
   reduce: function(arr, callback) {
     var sum = 0;
     for(var i =0; i<arr.length; i++){
       num = arr[i];
       sum =sum+callback(num);
     }
     // code here;
     return sum;
   },
   find: function(arr, callback) {
     for(var i =0 ; i<arr.length; i++){
       var num = arr[i];
       var y = callback(num);
       if(y == true){
         return num;
         break;
       }

     }

     // code here;
   },
   filter: function(arr, callback) {
     var newarr=[];
     for(var i =0; i<arr.length; i++){
       var num = arr[i];
       var y = callback(num);
           if (y == true) {
             newarr.push(arr[i]);
           }
          //  console.log(newarr);
          //  console.log(y);
     }
     return newarr;

     // code here;
   },
   reject: function(arr, callback) {
     var newarr =[];
     for(var i =0; i<arr.length; i++){
       var num = arr[i];
       var y = callback(num);
        if(y == false){
          newarr.push(num);
        }

     }

return newarr;



     // code here;
   }
 }
// you just created a library with 5 methods!

console.log(_.filter([1,2,3,4], function(num){ return num % 2 == 0; }));
console.log(_.map([1, 2, 3], function(num){ return num * 4; }));
console.log(_.reduce([4, 2, 3], function(num){ return num;  }));
console.log(_.find([1,2,3,4], function(num){ return num % 2 == 0; }));
console.log(_.reject([1,2,3,4,5,7], function(num){ return num % 2 == 0; }));
