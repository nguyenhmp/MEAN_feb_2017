// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// Track: MEAN
// Course: Login and Registration
// Assignment: Login and Registration

console.log("loginController");

app.controller('loginController', ['$scope', "$location", 'userFactory', function($scope, $location, userFactory) {

    $scope.login = function(){
        userFactory.login($scope.user, function (data) {
            console.log("loginController - login:", data);
            console.log("loginController - login:", data.err);
            $scope.flag = false;
            $scope.data = data;
            console.log($scope.data);
            if ($scope.data.err) {
                $scope.flag = true;
            }
            else {
                console.log("loginController - success:", $scope.data.user._id);
                $location.url("/success/" + $scope.data.user._id)
            }
            console.log("loginController flag:", $scope.flag);
            $scope.user = {};
        })
    }
}]);
