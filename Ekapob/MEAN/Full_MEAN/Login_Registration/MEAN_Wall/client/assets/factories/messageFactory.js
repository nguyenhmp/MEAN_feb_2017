// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// February 28, 2017
// Track: MEAN
// Course: Full MEAN
// Assignment: MEAN Wall

// console.log("messageFactory");
app.factory('messageFactory', ["$http", function($http) {
    var factory = {};

    factory.create_message = function(newMessage, callback) {
        // console.log("messageFactory.create: before", newMessage);
        $http.post("/createMessage", newMessage).then(function (data) {
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

    factory.create_comment = function(messageID, newComment, callback) {
        // console.log("messageFactory.create_comment: before", newComment);
        $http.post("/createComment/" + messageID, newComment).then(function (data) {
            // console.log("messageFactory.create_comment:", data.data);
            if (typeof(callback) === 'function') {
                callback(data.data);
            }
        })
    };
    // factory.show = function(id, callback) {
    //     console.log("pollFactory.show before $http.get: ", id);
    //     $http.get("/show/" + id).then(function (data) {
    //         console.log("pollFactory.show:", data.data);
    //         if (typeof(callback) === 'function') {
    //             callback(data.data);
    //         }
    //     })
    // };

    // factory.vote = function(poll_id, vote, callback) {
    //     console.log("pollFactory.vote:", poll_id, vote);
    //     $http.put("/vote/" + poll_id, vote).then(function (data) {
    //         console.log("pollFactory.vote:", data);
    //         if (typeof(callback) === 'function') {
    //             callback(data.data);
    //         }
    //     })
    // }

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
