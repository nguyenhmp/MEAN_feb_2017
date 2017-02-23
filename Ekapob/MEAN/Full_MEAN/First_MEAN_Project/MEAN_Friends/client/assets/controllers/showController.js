// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// Track: MEAN
// Course: Full MEAN
// Assignment: MEAN_Friends

console.log("showController");

app.controller('showController', ['$scope', 'userFactory', '$location', '$routeParams', function($scope, userFactory, $location, rParams) {
    this.getUser = function() {
        console.log("showController getUser:", rParams);
        userFactory.show(rParams.id, function (user) {
            $scope.user = user;
        })
    }
    /* on load time */
    this.getUser();
    console.log("showController object:", this);
}]);
