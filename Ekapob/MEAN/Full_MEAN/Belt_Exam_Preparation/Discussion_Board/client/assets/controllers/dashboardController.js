// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// March 01, 2017
// Track: MEAN
// Course: Full MEAN
// Assignment: Discussion_Board

app.controller('dashboardController', ['$scope', "$cookies", '$location', '$routeParams', 'topicFactory', function($scope, $cookies, $location, $routeParams, topicFactory) {
    // console.log("HEYOOOO", $cookies.get("session"))
    if (!$cookies.get("session")) {
        $location.url("/login")
    }

    $scope.categories = ["Forwards", "Midfielders", "Defenders", "Goalkeepers", "Managers"];
    $scope.newComment = {};

    var userID = $cookies.get("session");
    $scope.currentUser = $cookies.get("user");
    // console.log("dashboardController userID:", userID);

    $scope.create_topic = function() {
        // console.log("dashboardController create_message:", $scope.newMessage);
        $scope.newTopic._user = userID;
        topicFactory.create_topic($scope.newTopic, function (topic) {
            // console.log("dashboardController create_message:", message);
            $scope.newTopic = {};
            $scope.all_topics();
        })
    }

    $scope.all_topics = function() {
        console.log("dashboardController all_topics before:");
        topicFactory.all_topics(function (topics) {
            console.log("dashboardController all_topics:", topics);
            $scope.topics = topics;
        })
    }

    // $scope.delete = function (poll_id) {
    //     console.log(poll_id);
    //     pollFactory.delete (poll_id)
    //     $scope.all_polls();
    // }

    $scope.logout = function () {
        $cookies.remove("session");
        $location.url("/login")
    }
    /* on load time */
    // $scope.getUser();
    $scope.all_topics();
    // console.log("successController object:", $scope.getUser);

    // Code below used to check user database only
    // $scope.all_users = function() {
    //     console.log("dashboardController all_users before:");
    //     userFactory.all_users(function (users) {
    //         console.log("dashboardController all_users:", users);
    //         $scope.users = users;
    //     })
    // }
    //
    // $scope.all_users();
}]);
