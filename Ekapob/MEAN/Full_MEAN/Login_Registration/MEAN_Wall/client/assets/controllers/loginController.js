// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// February 28, 2017
// Track: MEAN
// Course: Full MEAN
// Assignment: MEAN Wall

console.log("loginController");

app.controller('loginController', ['$scope', "$location", "$cookies", 'userFactory', function($scope, $location, $cookies, userFactory) {
    console.log("loginController - cookies:", $cookies.get("session"))

    $scope.login = function(){
        // $scope.flag = false;
        userFactory.login($scope.user, function (data) {
            console.log("loginController - login: $scope.user", $scope.user);
            console.log("loginController - login: data", data);
            $scope.data = data;
            console.log("loginController - login: $scope.data", $scope.data);
            if ($scope.data.err) {
                // $scope.flag = true;
            }
            else {
                console.log("loginController - success:", data.user.name);
                $cookies.put('session', data.user._id);
                $location.url("/dashboard/" + data.user.name)
            }
            // console.log("loginController flag:", $scope.flag);
            $scope.user = {};
        })
    }
}]);
