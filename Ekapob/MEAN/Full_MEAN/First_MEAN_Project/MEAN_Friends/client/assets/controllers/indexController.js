// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// Track: MEAN
// Course: Full MEAN
// Assignment: MEAN_Friends

console.log("indexController");
app.controller('indexController', ['$scope', 'userFactory', '$location', '$routeParams', function($scope, userFactory, $location, rParams) {
    /* Private Methods */
    var usersIndex = function() {
        userFactory.index(function (data) {
            // console.log("indexController, usersFactory.index:", data);
            $scope.users = data;
        } /* end args passed to userFactory.index */ ); //end userFactory method invokation
    } //end usersIndex

    /* Scope Methods */
    $scope.show = function(user_id) {
        $location.url('/edit/' + user_id);
    }

    $scope.delete = function (user_id) {
        console.log(user_id);
        userFactory.delete (user_id)
        console.log($location);
        usersIndex()
    }

    /* on load time */
    // console.log("loading the controller");
    // console.log(userFactory);
    // console.log(this);
    usersIndex();
}]);
