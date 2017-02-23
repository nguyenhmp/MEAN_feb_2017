// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// Track: MEAN
// Course: Full MEAN
// Assignment: File Structure and Simple Server

console.log("editController");

app.controller('editController', ['$scope', 'userFactory', '$location', '$routeParams', function($scope, userFactory, $location, rParams) {
    /* Public Properties */
    this.controlValue = "Current Information: ";
    /* Public Methods */
    this.getUser = function() {
        userFactory.show(rParams.id, function (user) {
            $scope.user = user;
        })
    }

    this.updateUser = function(){
        userFactory.update($scope.updatedInfo, rParams.id, function (userFromFactory){
            $scope.user = userFromFactory;
        });
        this.controlValue = "User successfully updated!";
    }
    /* on load time */
    this.getUser();
    console.log(this.controlValue);
    console.log($scope.user);
    console.log(this);
}]);
