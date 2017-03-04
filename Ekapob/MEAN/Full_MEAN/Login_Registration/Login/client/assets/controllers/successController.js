// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// Track: MEAN
// Course: Login and Registration
// Assignment: Login and Registration

console.log("successController");

app.controller('successController', ['$scope', "$cookies", '$location', '$routeParams', 'userFactory', function($scope, $cookies, $location, rParams, userFactory) {
    //
    // $cookies.remove("session");
    $cookies.put('session', rParams.id);
    var currentUser = $cookies.get("session")
    console.log("currentUser:", currentUser);
    $scope.getUser = function() {
        // console.log("successController getUser:", rParams);
        userFactory.show(rParams.id, function (user) {
            // console.log(user);
            $scope.user = user;
        })
    }

    $scope.logout = function () {
        $cookies.remove("session");
        $location.url("/index")
    }
    /* on load time */
    $scope.getUser();
    // console.log("successController object:", $scope.getUser);
}]);
