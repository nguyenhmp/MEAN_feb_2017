// Ekapob Ukritnukun
// ThaiGQ@gmail.com

var _ = {
    map: function(list, iteratee, context) {
        var new_List = [];
        if (typeof(iteratee) == "function") {
            for (var i = 0; i < list.length; i++) {
                new_List.push(iteratee(list[i])); // calls function "iteratee" and adds the returned value to the new_List
            }
            return new_List
        }
        else {
            return ("Second parameter must be a function!")
        }
    },

    reduce: function(list, iteratee, memo, context) {
        if (typeof(iteratee) == "function") {
            for (var i = 0; i < list.length; i++) {
                memo = iteratee(memo, list[i]); // calls function "iteratee" and adds sum of previous numbers (memo) to the current number in the list
            }
            return memo
        }
        else {
            return ("Second parameter must be a function!")
        }
    },

    find: function(list, predicate, context) {
        if (typeof(predicate) == "function") {
            for (var i = 0; i < list.length; i++) {
                if (predicate(list[i])) { // calls function "predicate" and if statement is "True", returns the value of the current item being evaluated
                    return list[i]
                }
            }
        }
        else {
            return ("Second parameter must be a function!")
        }
    },

    filter: function(list, predicate, context) {
        if (typeof(predicate) == "function") {
            var new_List = [];
            for (var i = 0; i < list.length; i++) {
                if (predicate(list[i])) { // calls function "predicate" and if "True", adds the value of the current item to new_List, returning all values that match
                    new_List.push(list[i]);
                }
            }
            return new_List
        }
        else {
            return ("Second parameter must be a function!")
        }
    },

    reject: function(list, predicate, context) {
        if (typeof(predicate) == "function") {
            var new_List = [];
            for (var i = 0; i < list.length; i++) {
                if (!predicate(list[i])) { // calls function "predicate" to compare if statement is "False" and adds the value of the current item to new_List, returning all values that do NOT match
                    new_List.push(list[i]);
                }
            }
            return new_List
        }
        else {
            return ("Second parameter must be a function!")
        }
    }
}
// you just created a library with 5 methods!

var map = _.map([1, 2, 3], function(num){ return num * 3; });
console.log(map); // if things are working right, this will return [3, 6, 9].

var reduce = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
console.log(reduce); // if things are working right, this will return 6.

var find = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(find); // if things are working right, this will return 2.

var filter = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(filter); // if things are working right, this will return [2, 4, 6].

var reject = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(reject); // if things are working right, this will return [1, 3, 5].
