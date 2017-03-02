// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// March 01, 2017
// Track: MEAN
// Course: Full MEAN
// Assignment: Discussion_Board

app.factory('topicFactory', ["$http", function($http) {
    var factory = {};

    factory.create_topic = function(newTopic, callback) {
        // console.log("topicFactory.create: before", newTopic);
        $http.post("/createTopic", newTopic).then(function (data) {
            // console.log("topicFactory.create:", data.data);
            if (typeof(callback) === 'function') {
                callback(data.data);
            }
        })
    };

    factory.all_topics = function(callback) {
        $http.get("/dashboard").then(function (data) {
            console.log("topicFactory.all_topics:", data.data.topics);
            if (typeof(callback) === 'function') {
                callback(data.data.topics);
            }
        })
    };

    factory.create_message = function(topicID, newMessage, callback) {
        // console.log("messageFactory.create: before", newMessage);
        $http.post("/createMessage/" + topicID, newMessage).then(function (data) {
            // console.log("messageFactory.create:", data.data);
            if (typeof(callback) === 'function') {
                callback(data.data);
            }
        })
    };

    factory.all_messages = function(callback) {
        $http.get("/dashboard").then(function (data) {
            console.log("messageFactory.all_messages:", data.data.messages);
            if (typeof(callback) === 'function') {
                callback(data.data.messages);
            }
        })
    };

    factory.show_topic = function(topicID, callback) {
        console.log("topicFactory.show_topic before $http.get: ", topicID);
        $http.get("/topic/" + topicID).then(function (data) {
            console.log("topicFactory.show_topic - data.data.topic:", data.data.topic);
            if (typeof(callback) === 'function') {
                callback(data.data.topic);
            }
        })
    };

    factory.vote = function(messageID, vote, callback) {
        console.log("topicFactory.vote:", messageID, vote);
        $http.put("/vote/" + messageID, vote).then(function (data) {
            console.log("messageFactory.vote:", data);
            if (typeof(callback) === 'function') {
                callback(data.data);
            }
        })
    }

    factory.create_comment = function(messageID, newComment, callback) {
        // console.log("messageFactory.create_comment: before", newComment);
        $http.post("/createComment/" + messageID, newComment).then(function (data) {
            // console.log("messageFactory.create_comment:", data.data);
            if (typeof(callback) === 'function') {
                callback(data.data);
            }
        })
    };

    // factory.delete = function(id, callback) {
    //     console.log("pollFactory.delete:", id);
    //     $http.delete("/delete/" + id).then(function (data) {
    //         console.log("pollFactory.delete:", data);
    //         if (typeof(callback) === 'function') {
    //             callback(data.data);
    //         }
    //     })
    // }

    return factory;
}]);
