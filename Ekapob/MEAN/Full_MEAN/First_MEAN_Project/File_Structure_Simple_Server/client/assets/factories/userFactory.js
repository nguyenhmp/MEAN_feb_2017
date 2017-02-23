// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// Track: MEAN
// Course: Full MEAN
// Assignment: File Structure and Simple Server

console.log("userFactory");
app.factory('userFactory', ["$http", function($http) {
    function UserConstructor() {
        var users = [{
        first_name: "Ekapob",
        last_name: "Ukritnukun",
        dob: "09/26/1979"
        }];

        this.index = function(callback) {
            console.log("Is you working?");
            // if (users.length < 10){
            //     $http.get('http://54.209.117.252/users').then(function(data){
            //         if (typeof(callback) === 'function') {
            //             users = data.data;
            //             callback(users);
            //         }
            //     });
            //     return;
            // }
            // else {
            //     callback(users);
            // }
            callback(users)
        };
        /*
        Creates a newUser by pushing the newUser argument into the users array
        then runs the callback to return the updated array to controllers
        */
        this.create = function(newUser, callback) {
            if (typeof(newUser) === 'object') {
                users.push(newUser)
            }
            if (typeof(callback) === 'function') {
                callback(users);
            }
        };

        this.show = function(idx, callback) {
            if (typeof(callback) === 'function') {
                callback(users[idx]);
            }
        }
        /* receives information from the controller and uses the index to locate the correct object to update then returns the updated object */
        this.update = function(updateUser, idx, callback) {
            if (users[idx]) {
                for (var key in updateUser) {
                    users[idx][key] = updateUser[key];
                }
            }
            if (typeof(callback) === 'function') {
                callback(users[idx]);
            }
        }

        this.delete = function(idx, callback) {
            if (users[idx]) {
                users.splice(idx, 1);
            }
            if (typeof(callback) === 'function') {
                callback(users);
            }
        }
    }
    /*
      What is this factory returning?  Could we extend this code to be reused?
    */
    return (new UserConstructor());
}]);
