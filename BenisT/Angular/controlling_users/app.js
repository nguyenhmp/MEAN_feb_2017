var app = angular.module('myApp',[])
app.controller('UsersController', function($scope){
  $scope.users=[]
  $scope.addUser = function(){
    $scope.users.push({fname: $scope.fname, lname: $scope.lname, faveLang: $scope.flang, date: $scope.date})
    $scope.fname = '';
    $scope.lname = '';
    $scope.flang ="";
    $scope.date ="";
  }
  $scope.delete = function(val){

  for(var i =0; i < $scope.users.length; i++){
    if(i == val){
      $scope.users.splice(i, 1)
    }
  }
  }
})
