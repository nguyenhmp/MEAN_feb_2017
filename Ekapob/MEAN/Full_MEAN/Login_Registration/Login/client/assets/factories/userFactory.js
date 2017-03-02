// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// Track: MEAN
// Course: Login and Registration
// Assignment: Login and Registration

console.log("userFactory");
app.factory('userFactory', ["$http", function($http) {
    var factory = {};

    factory.create = function(newUser, callback) {
        $http.post("/new", newUser).then(function (data) {
            console.log("userFactory.create:", data.data);
            if (typeof(callback) === 'function') {
                callback(data.data);
            }
        })
    };

    factory.login = function(userData, callback) {
        $http.post("/login", userData).then(function (data) {
            console.log("userFactory.login:", data.data);
            if (typeof(callback) === 'function') {
                callback(data.data);
            }
        })
    };

    factory.show = function(id, callback) {
        console.log("userFactory.show: ", id);
        $http.get("/success/" + id).then(function (data) {
            console.log("userFactory.show:", data.data.user);
            if (typeof(callback) === 'function') {
                callback(data.data.user);
            }
        })
    };

    return factory;
}]);
