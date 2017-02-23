// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// Track: MEAN
// Course: Full MEAN
// Assignment: MEAN_Friends

console.log("newController");

app.controller('newController', ['$scope', "$location", 'userFactory', function($scope, $location, userFactory) {
    $scope.addUser = function(){
        userFactory.create($scope.user, function (data) {
            console.log("newController, addUser:", data);
            $scope.users = data;
        })
        console.log("newController after addUser:", $scope.user);
        // $scope.user = {};
        $location.url("/index")
    }
}]);
