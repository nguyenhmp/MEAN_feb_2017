// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// February 28, 2017
// Track: MEAN
// Course: Full MEAN
// Assignment: MEAN Wall

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

    return factory;
}]);
