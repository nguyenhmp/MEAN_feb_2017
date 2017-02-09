var _ = {
    map: function(iterable, func) {
    //code here;
        var newArray = [];
        for (var i = 0; i < iterable.length; i++){
            newArray.push(func(iterable[i]));
        }
        return newArray;
    },
    reduce: function(iterable, func) {
        // code here;
        init = iterable[0];
        for(var i = 1; i < iterable.length; i++){
            init = func(init, iterable[i]);
        }
        return init;
    },
    find: function(iterable, func) {
        // code here;
        for(x in iterable){
            if(func(x)){
                return x;
            }
        }
    },
    filter: function(iterable, func) {
    // code here;
        var newArray = [];
        for(x of iterable){
            if(func(x)){
                newArray.push(x);
            }
        }
        return newArray;
    },
    reject: function(iterable, func) {
    // code here;
        newArray = [];
        for(x of iterable){
            if(!func(x)){
                newArray.push(x);
            }
        }
        return newArray;
    }
}
// you just created a library with 5 methods!

var myArray = [1,2,3,4,5,6,7,8,9,10];

var myFunction = function(arg){
    return arg*arg;
}

var myReduceFunction = function(arg1, arg2){
    return arg1 + arg2;
}

console.log("map function:");
result = _.map(myArray, myFunction);
console.log(result);

console.log("reduce function:")
result = _.reduce(myArray, myReduceFunction);
console.log(result);

console.log("find function:");
result = _.find(myArray, function(x){return x > 4});
console.log(result);

console.log("filter function:");
result = _.filter(myArray, function(x){return x <= 4});
console.log(result);

console.log("reject function:");
result = _.reject(myArray, function(x){return x <= 4});
console.log(result);
