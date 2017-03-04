// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// March 01, 2017
// Track: MEAN
// Course: Full MEAN
// Assignment: Discussion_Board

console.log("loginController");

app.controller('loginController', ['$scope', "$location", "$cookies", 'userFactory', function($scope, $location, $cookies, userFactory) {
    console.log("loginController - cookies:", $cookies.get("session"))

    $scope.login = function(){
        userFactory.login($scope.user, function (data) {
            console.log("loginController - login: $scope.user", $scope.user);
            console.log("loginController - login: data", data);
            $scope.data = data;
            console.log("loginController - login: $scope.data", $scope.data);
            if ($scope.data.err) {
            }
            else {
                console.log("loginController - success:", data.user.name);
                $cookies.put('session', data.user._id);
                $cookies.put("user", data.user.name);
                $location.url("/dashboard/" + data.user.name)
            }
            $scope.user = {};
        })
    }
}]);
