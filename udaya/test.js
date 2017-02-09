// // console.log('I am running from node');
// // var myunknown = 'hello';
// // console.log(typeof(myunknown));
//
// // console.log(a);
// // var a = "hello";
//
// console.log(typeof(b));
// var b = "happy";
// console.log(typeof(b));


// var empty_array = [ ];             // create empty array with square brackets  (creates a bureau of drawers)
// var string_array = [ "hi", "these", "are", "strings" ];
// var x = 15;                       // you can log these vars in the console (even a whole array)
// console.log("Logging variables to the console", empty_array, string_array, x);
//                                   // use square brackets again(e.g. string_array[1])  to access values in the array (to open a specific drawer in the bureau)
// console.log('2nd value of string_array', string_array[1]);



// var arr = [3, 6];
// // arr[234] = "hi";
// // console.log(arr.length); // 235
// // console.log( arr[34] ); // undefined
// arr.length = 3;
// arr[234] = "hi";
// console.log( arr[34] );
// console.log( arr[234] );
// console.log( arr.length );
// arr.length = 500;
// console.log( arr[234] );
// console.log( arr.length );

// var ninja = {
//   name:'Susanna',
//   MEAN_belt:10,
//   iOS_belt:10,
//   python_belt:10,
//   php_belt:9, // she hadn't mastered deploying yet!
//   ruby_belt:9.75 // done in 1.5 hrs though!
// }
// for (var x in ninja) {
//   if (ninja.hasOwnProperty(x)) {
//     console.log(x);
//     console.log(ninja[x]);
//   }
// }


// var array = [ function(){console.log('hello there');}, function(){console.log('mean stack'); } ]
// array[1]();
// array[0]();

// var object = { helloFunc: function(){console.log('hello there');} }
// object.helloFunc()

// var object = { hello: function(){console.log('hello there');}, mean: function(){console.log('mean stack'); } }
// object.mean()
// object.hello()

// var dojo = {};                                 // creates an empty object
// dojo = {
//   name: 'Coding Dojo',                         // property can store a string
//   number_of_students: 25,                      // property can store a number
//   instructors: ['Andrew', 'Michael', 'Jay'],   // property can store arrays
//   location: {                                  // property can even store another object!
//     city: 'San Jose',
//     state: 'CA',
//     zipcode: 95112
//   }
// }                                              // access object properties with dot (.) notation
// // console.log(dojo.name,dojo.number_of_students, dojo.instructors, dojo.location);
// console.log(dojo["name"]);                     // or bracket [] notation (note: specify key in quotes)
// dojo.number_of_students = 40;                  // we can reassign any of the properties
//
// dojo.location.city = "Bellevue";
// dojo.location.state = "Washington";
// dojo.location.zipcode = "unknown";             // note that we can change this from integer to string
// dojo.phone_number = 1234567890 ;
// console.log(dojo.name,dojo.number_of_students, dojo.instructors, dojo.location, dojo.phone_number);

// var myDonut = {
//   frosting: 'glazed',
//   type: 'old fashioned',
// }

// var glazedDonuts = [
//   {
//     frosting: 'glazed',
//     type: 'old fashioned',
//     age: '45',
//     time: 'minutes'
//   },
//   {
//     frosting: 'glazed',
//     type: 'regular',
//     age: '5',
//     time: 'minutes'
//   },
//   {
//     frosting: 'glazed',
//     type: 'jelly filled',
//     age: '3',
//     time: 'seconds'
//   }
// ];
//
// var purchase;
// //You
// if(glazedDonuts[2].age < 25 && (glazedDonuts[2].time == 'seconds' || glazedDonuts[2].time == 'minutes')){
//   //shop owner
//   purchase = glazedDonuts[2];
//   console.log(glazedDonuts[2].type +" donuts has been purchased" );
// }
// else {
//   console.log('sorry it has been out a bit longer');
// }

var varFunction;
// varFunction();
 varFunction = function() {
  console.log("How will this get hoisted?")
}
varFunction();

awesome();
function awesome() {
  console.log("too good to be true");
}
