// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// March 01, 2017
// Track: MEAN
// Course: Full MEAN
// Assignment: Discussion_Board

console.log("userFactory");
app.factory('userFactory', ["$http", function($http) {
    var factory = {};

    factory.login = function(userData, callback) {
        $http.post("/login", userData).then(function (data) {
            console.log("userFactory.login:", data.data);
            if (typeof(callback) === 'function') {
                callback(data.data);
            }
        })
    };

    factory.show_user = function(userID, callback) {
        console.log("userFactory.show_user before $http.get: ", userID);
        $http.get("/user/" + userID).then(function (data) {
            console.log("userFactory.show_user: ", data.data);
            if (typeof(callback) === 'function') {
                callback(data.data.user);
            }
        })
    };

    // factory.all_users = function(callback) {
    //     $http.get("/users").then(function (data) {
    //         console.log("userFactory.all_users:", data);
    //         if (typeof(callback) === 'function') {
    //             callback(data.data.users);
    //         }
    //     })
    // };

    return factory;
}]);
