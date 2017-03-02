// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// March 01, 2017
// Track: MEAN
// Course: Full MEAN
// Assignment: Discussion_Board

console.log("userController");

app.controller('userController', ['$scope', '$location', "$cookies", '$routeParams', 'userFactory', function($scope, $location, $cookies, $routeParams, userFactory) {

    if (!$cookies.get("session")) {
        $location.url("/login")
    }

    $scope.show_user = function() {
        console.log("userController show_user:", $routeParams);
        userFactory.show_user($routeParams.userID, function (user) {
            $scope.user = user;
            console.log("userController user:", user);
        })
    }

    $scope.logout = function () {
        $cookies.remove("session");
        $location.url("/login")
    }
    /* on load time */
    $scope.show_user();
}]);
