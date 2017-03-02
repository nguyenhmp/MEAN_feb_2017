// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// February 28, 2017
// Track: MEAN
// Course: Full MEAN
// Assignment: MEAN Wall

console.log("Server/Controllers/users.js");

var mongoose = require('mongoose');
var Message = mongoose.model('Message');


module.exports = {

    // show: function(req, res){
    //     console.log("users.js show req.body:", req.params);
    //     User.findOne({name: req.params.name}, function(err, user) {
    //         console.log("users.js show:", req.params.name);
    //         console.log("users.js show:", user);
    //         if (err) {
    //             console.log("Danger! Danger! Iminent Warp Core breach detected!");
    //             console.log("users.js show:", err)
    //         }
    //         res.json({user:user});
    //     })
    // },
    //
    all_messages: function(req, res) {
        console.log("**************************************************");
        console.log("Finding all messages");
        Message.
            find({}).
            populate("_user").
            populate("comments").
            populate("comments._user").
            sort({createdAt: "descending"}).
            exec(function(err, messages) {
            if (err) {
                console.log("Danger! Danger! Iminent Warp Core breach detected!" + err);
            }
            console.log("messages.js all_messages:", messages);
            res.json({messages:messages});
        })
    },

    create_message: function (req, res) {
        console.log(req.body);
        var message = new Message({
            _user: req.body._user,
            message: req.body.message
        });
        console.log("messages.js, create_message:", message);

        message.save(function(err) {
            if(err) {
                console.log('Unable to add new Message!' + err);
            }
            else {
                console.log('New Message added to database!');
            }
            res.json({err:err});
        })
    },

    create_comment: function (req, res) {
        console.log("messages.js create_comment:", req.body);
        console.log(req.body._user);
        Message.findOne({_id: req.params.messageID}, function(err, message){
            console.log(message);
            console.log(req.body._user);
            var comment = {
                _user: req.body._user,
                comment: req.body.comment,
            };
            message.comments.push(comment)
            message.save(function(err){
                if(err) {
                    console.log('Unable to add new Comment!' + err);
                }
                else {
                    console.log('New Comment successfully added!');
                }
                res.json({err:err});
            })
        })

    }
}
