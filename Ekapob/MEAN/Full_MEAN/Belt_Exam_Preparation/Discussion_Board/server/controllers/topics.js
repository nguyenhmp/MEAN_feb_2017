// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// March 01, 2017
// Track: MEAN
// Course: Full MEAN
// Assignment: Discussion_Board

console.log("Server/Controllers/users.js");

var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var Message = mongoose.model("Message");
var Comment = mongoose.model("Comment");
var User = mongoose.model('User');


module.exports = {

    create_topic: function (req, res) {
        console.log(req.body);
        User.findOne({_id: req.body._user}, function(err, user){
            console.log(user);
            var topic = new Topic ({
                _user: req.body._user,
                title: req.body.title,
                description: req.body.description,
                category: req.body.category
            });
            user.topics.push(topic)
            console.log("topics.js, create_topic - user.topics:", user.topics);
            user.save(function(err){
                if(err) {
                    console.log('Unable to add new Topic to User!' + err);
                }
                else {
                    console.log('New Topic successfully added to User!');
                    topic.save(function(err){
                        if(err) {
                            console.log('Unable to add new Topic!' + err);
                        }
                        else {
                            console.log('New Topic successfully added!');
                        }
                    })
                }
                res.json({err:err});
            })
        })
    },

    show_topic: function(req, res){
        console.log("topics.js show req.params:", req.params);
        Topic.
            findOne({_id: req.params.topicID}).
            populate("_user").
            populate("messages").
            populate("messages._user").
            populate("messages.comments").
            populate("messages.comments._user").
            sort({"messages.createdAt": "descending"}).
            exec(function(err, topic) {
            if (err) {
                console.log("Danger! Danger! Iminent Warp Core breach detected!" + err);
            }
            console.log("topics.js show_topic:", topic);
            res.json({topic:topic});
        })
    },

    all_topics: function(req, res) {
        console.log("**************************************************");
        console.log("Finding all topics");
        Topic.
            find({}).
            populate("_user").
            // populate("comments").
            // populate("comments._user").
            sort({createdAt: "descending"}).
            exec(function(err, topics) {
            if (err) {
                console.log("Danger! Danger! Iminent Warp Core breach detected!" + err);
            }
            console.log("messages.js all_topics:", topics);
            res.json({topics:topics});
        })
    },

    create_message: function (req, res) {
        console.log(req.body);
        User.findOne({_id: req.body._user}, function(err, user){
            console.log(user);
            var message = new Message({
                _user: req.body._user,
                message: req.body.message,
                upvotes: 0,
                downvotes: 0
            });
            user.messages.push(message)
            console.log("topics.js, create_message - user.messages:", user.messages);
            user.save(function(err){
                if(err) {
                    console.log('Unable to add new Message to User!' + err);
                }
                else {
                    console.log('New Topic successfully added to User!');
                    Topic.findOne({_id: req.params.topicID}, function(err, topic){
                        console.log(topic);
                        topic.messages.push(message)
                        console.log("topics.js, create_message - topic.messages:", topic.messages);
                        topic.save(function(err){
                            if(err) {
                                console.log('Unable to add new Topic!' + err);
                            }
                            else {
                                console.log('New Topic successfully added!');
                            }
                        })
                    })
                }
                res.json({err:err});
            })
        })
    },

    vote: function (req, res) {
        console.log("topics.js vote req.params", req.params);
        console.log("topics.js vote req.body", req.body);
        Topic.findOne({_id: req.body.topicID}).populate("messsages").exec(function(err, topic) {
            console.log("topics.js vote:", topic);
            if (err) {
                console.log("Danger! Danger! Iminent Warp Core breach detected!");
                console.log("users.js show:", err)
            }
            if (topic) {
                for (message in topic.messages) {
                    if (topic.messages[message].id == req.params.messageID) {
                        switch (req.body.option) {
                            case "upvote":
                            topic.messages[message].upvotes += 1;
                            break;
                            case "downvote":
                            topic.messages[message].downvotes += 1;
                            break;
                        }
                    }
                }
                topic.save(function(err, topic) {
                    if(err) {
                        console.log('Unable to update new vote!' + err);
                        res.json({err:err})
                    }
                    else {
                        console.log('Vote tallied!');
                        console.log(topic);
                        res.json({topic:topic});
                    }
                    console.log("Server/Controllers/topics.js - vote:", topic);
                })
            }
        })
    },

    create_comment: function (req, res) {
        console.log(req.body);
        User.findOne({_id: req.body._user}, function(err, user){
            console.log("***************************************************************");
            console.log(user);
            var comment = new Comment({
                _user: req.body._user,
                comment: req.body.comment,
            });
            user.comments.push(comment)
            console.log("topics.js, create_comment - user.comments:", user.comments);
            user.save(function(err){
                if(err) {
                    console.log('Unable to add new Comment to User!' + err);
                }
                else {
                    console.log('New Comment successfully added to User!');
                    Topic.findOne({_id: req.body.topicID}, function(err, topic){
                        console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
                        console.log(topic);
                        if(err) {
                            console.log('Unable to add new Comment!' + err);
                        }
                        else {
                            for (message in topic.messages) {
                                if (topic.messages[message].id == req.params.messageID) {
                                    topic.messages[message].comments.push(comment)
                                }
                            }
                            topic.save(function(err, topic) {
                                if(err) {
                                    console.log('Unable to add new Comment to Message!' + err);
                                    res.json({err:err})
                                }
                                else {
                                    console.log('New Comment successfully added to Message!');
                                    console.log(topic);
                                }
                                console.log("Server/Controllers/topics.js - vote:", topic);
                                res.json();
                            })
                        }
                    })
                }
                res.json({err:err});
            })
        })
    },
}
