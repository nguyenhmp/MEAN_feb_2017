// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// March 01, 2017
// Track: MEAN
// Course: Full MEAN
// Assignment: Discussion_Board

console.log("Server/Controllers/users.js");

var mongoose = require('mongoose');
var User = mongoose.model('User');


module.exports = {
    login: function(req, res){
        console.log(req.body.name);
        var name = req.body.name;
        User.findOne({name: name}, function(err, user) {
            console.log("*********************************************************");
            console.log(user);
            console.log("************************************************************");
            if (!user) {
                var newUser = new User({
                    name: req.body.name,
                });
                newUser.save(function(err, user) {
                    console.log("Server/Controllers/users.js - create:", user);
                    console.log('New User added to database!');
                    console.log(user);
                    res.json({user:user});
                })
            }
            else if (err) {
                console.log('Unable to add new User!' + err);
                res.json({err:err})
            }
            else {
                console.log("Successfully logged in!");
                res.json({user:user});
            }
        })
    },

    show_user: function(req, res){
        console.log("users.js show_user - req.params:", req.params);
        User.findOne({_id: req.params.userID}, function(err, user) {
            console.log("users.js show:", user);
            if (err) {
                console.log("Danger! Danger! Iminent Warp Core breach detected!");
                console.log("users.js show:", err)
            }
            res.json({user:user});
        })
    },

    // all_users: function(req, res) {
    //     console.log("**************************************************");
    //     console.log("Finding all users");
    //     User.find({}, function(err, users) {
    //         if (err) {
    //             console.log("Danger! Danger! Iminent Warp Core breach detected!" + err);
    //         }
    //         console.log("users.js all_users:", users);
    //         res.json({users:users});
    //     })
    // },
}
