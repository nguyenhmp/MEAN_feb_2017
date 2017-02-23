// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// Track: MEAN
// Course: Full MEAN
// Assignment: MEAN_Friends

console.log("userFactory");
app.factory('userFactory', ["$http", function($http) {
    function UserConstructor() {

        this.index = function(callback) {
            console.log("userFactory.index");
            $http.get("/index").then(function (data) {
                console.log("userFactory.index:", data.data.users);
                callback(data.data.users)
            })
        };
        /*
        Creates a newUser by pushing the newUser argument into the users array
        then runs the callback to return the updated array to controllers
        */
        this.create = function(newUser, callback) {
            $http.post("/new", newUser).then(function (data) {
                console.log("userFactory.create:", data.data);
                if (typeof(callback) === 'function') {
                    callback(data.data);
                }
            })
        };

        this.show = function(id, callback) {
            console.log("userFactory.show: ", id);
            $http.get("/show/" + id).then(function (data) {
                console.log("userFactory.show:", data.data.user);
                if (typeof(callback) === 'function') {
                    callback(data.data.user);
                }
            })
        }
        /* receives information from the controller and uses the index to locate the correct object to update then returns the updated object */
        this.update = function(info, id, callback) {
            console.log("userFactory.update: ", id);
            $http.put("/edit/" + id, info).then(function (data) {
                console.log("userFactory.update:", data.data);
                if (typeof(callback) === 'function') {
                    callback(data.data);
                }
            })
        }

        this.delete = function(id, callback) {
            console.log("userFactory.delete:", id);
            $http.delete("/delete/" + id).then(function (data) {
                console.log("userFactory.delete:", data);
                if (typeof(callback) === 'function') {
                    callback(data.data);
                }
            })
        }
    }
    /*
      What is this factory returning?  Could we extend this code to be reused?
    */
    return (new UserConstructor());
}]);
