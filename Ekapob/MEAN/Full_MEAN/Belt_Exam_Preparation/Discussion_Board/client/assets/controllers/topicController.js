// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// March 01, 2017
// Track: MEAN
// Course: Full MEAN
// Assignment: Discussion_Board

app.controller('topicController', ['$scope', "$cookies", '$location', '$routeParams', 'topicFactory', function($scope, $cookies, $location, $routeParams, topicFactory) {
    if (!$cookies.get("session")) {
        $location.url("/login")
    }

    $scope.userID = $cookies.get("session");
    $scope.currentUser = $cookies.get("user");
    $scope.newComment = {};
    var messageID;

    $scope.show_topic = function() {
        console.log("topicController show_topic - $routeParams:", $routeParams);
        topicFactory.show_topic($routeParams.topicID, function (topic) {
            $scope.topic = topic;
            console.log("topicController topic:", topic);
        })
    }

    $scope.create_message = function() {
        // console.log("dashboardController create_message:", $scope.newMessage);
        $scope.newMessage._user = $scope.userID;
        topicFactory.create_message($routeParams.topicID, $scope.newMessage, function (message) {
            // console.log("dashboardController create_message:", message);
            $scope.newMessage = {};
            $scope.show_topic();
        })
    }

    $scope.upvote = function(message) {
        var vote = {
            topicID: $scope.topic._id,
            option: "upvote"
        }
        console.log("topicController message: ", message);
        console.log("topicController vote: ", vote);
        topicFactory.vote(message._id, vote, function () {
            $scope.show_topic();
        })
    }

    $scope.downvote = function(message) {
        var vote = {
            topicID: $scope.topic._id,
            option: "downvote"
        }
        console.log("topicController message: ", message);
        console.log("topicController vote: ", vote);
        topicFactory.vote(message._id, vote, function () {
            $scope.show_topic();
        })
    }

    $scope.create_comment = function(messageID) {
        console.log("dashboardController create_comment: before", $scope.newComment);
        console.log($scope.userID);
        if ($scope.newComment[messageID]) {
            $scope.newComment[messageID]._user = $scope.userID;
            $scope.newComment[messageID].topicID = $scope.topic._id,
            topicFactory.create_comment(messageID, $scope.newComment[messageID], function (comment) {
                console.log("dashboardController create_comment:", comment);
                $scope.newComment = {};
                $scope.show_topic();
            })
        }
        else {
            $scope.newComment = {};
        }
    }

    $scope.show_topic();

}]);
