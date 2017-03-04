// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// Track: MEAN
// Course: Login and Registration
// Assignment: Login and Registration

console.log("registrationController");

app.controller('registrationController', ['$scope', "$location", 'userFactory', function($scope, $location, userFactory) {

    $scope.addUser = function(){
        userFactory.create($scope.user, function (data) {
            console.log("registrationController - addUser:", data);
            console.log("registrationController - addUser:", data.err);
            $scope.flag = false;
            $scope.data = data;
            console.log($scope.data);
            if ($scope.data.err) {
                $scope.flag = true;
            }
            else {
                console.log("registrationController - success:", $scope.data.user._id);
                $location.url("/success/" + $scope.data.user._id)
            }
            console.log("registrationController flag:", $scope.flag);
            $scope.user = {};
        })
    }
}]);
