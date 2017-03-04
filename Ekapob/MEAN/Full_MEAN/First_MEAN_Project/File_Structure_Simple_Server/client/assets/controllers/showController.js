// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// Track: MEAN
// Course: Full MEAN
// Assignment: File Structure and Simple Server

console.log("showController");

app.controller('showController', ['$scope', 'userFactory', '$location', '$routeParams', function($scope, userFactory, $location, rParams) {
    this.getUser = function() {
        userFactory.show(rParams.id, function (user) {
            $scope.user = user;
        })
    }
    /* on load time */
    this.getUser();
    console.log(this);
}]);
