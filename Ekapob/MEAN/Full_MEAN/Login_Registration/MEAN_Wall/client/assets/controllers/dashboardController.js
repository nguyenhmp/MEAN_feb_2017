// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// February 28, 2017
// Track: MEAN
// Course: Full MEAN
// Assignment: MEAN Wall

// console.log("successController");

app.controller('dashboardController', ['$scope', "$cookies", '$location', '$routeParams', 'messageFactory', function($scope, $cookies, $location, $routeParams, messageFactory) {
    // console.log("HEYOOOO", $cookies.get("session"))
    if (!$cookies.get("session")) {
        $location.url("/login")
    }

    $scope.newComment = {};

    var userID = $cookies.get("session");
    $scope.currentUser = $routeParams.name;
    // console.log("dashboardController userID:", userID);

    $scope.create_message = function() {
        // console.log("dashboardController create_message:", $scope.newMessage);
        $scope.newMessage._user = userID;
        messageFactory.create_message($scope.newMessage, function (message) {
            // console.log("dashboardController create_message:", message);
            $scope.newMessage = {};
            $scope.all_messages();
        })
    }

    $scope.all_messages = function() {
        console.log("dashboardController all_messages before:");
        messageFactory.all_messages(function (messages) {
            console.log("dashboardController all_messages:", messages);
            $scope.messages = messages;
        })
    }

    $scope.create_comment = function(messageID) {
        // console.log("dashboardController create_comment: before", $scope.newComment);
        // console.log(userID);
        if ($scope.newComment[messageID]) {
            $scope.newComment[messageID]._user = userID;
            messageFactory.create_comment(messageID, $scope.newComment[messageID], function (comment) {
                // console.log("dashboardController create_comment:", comment);
                $scope.newComment = {};
                $scope.all_messages();
            })
        }
        else {
            $scope.newComment = {};
        }
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
    $scope.all_messages();
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
