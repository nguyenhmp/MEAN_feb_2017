// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// Track: MEAN
// Course: Full MEAN
// Assignment: File Structure and Simple Server

console.log("newController");

app.controller('newController', ['$scope', "$location", 'userFactory', function($scope, $location, userFactory) {
    $scope.addUser = function(){
        userFactory.create($scope.user, function (data) {
            $scope.users = data;
        })
        console.log($scope.user);
        $scope.user = {};
        $location.url("/")
    }
}]);
