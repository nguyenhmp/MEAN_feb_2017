// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// Track: MEAN
// Course: Full MEAN
// Assignment: MEAN_Friends

console.log("editController");

app.controller('editController', ['$scope', 'userFactory', '$location', '$routeParams', function($scope, userFactory, $location, rParams) {
    /* Public Properties */
    this.controlValue = "Current Information: ";
    /* Public Methods */
    this.getUser = function() {
        userFactory.show(rParams.id, function (data) {
            console.log("data.dob:", typeof(data.dob));
            data.dob = new Date(data.dob)
            $scope.user = {
                first_name: data.first_name,
                last_name: data.last_name,
                dob: data.dob
            };
            $scope.updatedInfo = data;
            console.log("editController.getuser: ", $scope.user);
        })
    }

    this.updateUser = function(){
        userFactory.update($scope.updatedInfo, rParams.id, function (userFromFactory){
            $scope.user = userFromFactory;
        });
        this.getUser();
        this.controlValue = "User successfully updated!";
    }
    /* on load time */
    this.getUser();
    console.log(this.controlValue);
    console.log(this);
}]);
