// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// Track: MEAN
// Course: Full MEAN
// Assignment: MEAN_Friends

console.log('users.js');

var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
    index: function(req, res){
        User.find({}, function(err, users) {
            if (err) {
                console.log("Danger! Danger! Iminent Warp Core breach detected!" + err);
            }
            // for (var user in users){
            //     console.log(users[user].id);
            // }
            // console.log("users.js, index:", users);
            res.json({users:users});
        })
    },

    create: function(req, res){
        var user = new User({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            dob: req.body.dob,
        });
        console.log("users.js, create:", user);

        user.save(function(err) {
            if(err) {
                console.log('Unable to add new User!' + err);
            }
            else {
                console.log('New User added to database!');
            }
            res.json({err:err});
        })
    },

    update: function(req, res){
        console.log("POST DATA:", req.params);

        User.update({_id: req.params.id}, {$set: {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            dob: req.body.dob}
        }, function (err) {
            if(err) {
                console.log('Unable to edit User!' + err);
            }
            else {
                console.log('User updated!');
            }
        })
    },

    delete: function(req, res){
        User.remove({_id: req.params.id}, function (err) {
            console.log("users.js delete:", req.params.id);
            if(err) {
                console.log('Unable to delete User!' + err);
            }
            else {
                console.log('User successfully deleted!');
            }
            // res.json({placeholder:'delete'});
        })
    },

    show: function(req, res){
        console.log("users.js show req.body:", req.params);
        User.findOne({_id: req.params.id}, function(err, user) {
            console.log("users.js show:", req.params.id);
            console.log("users.js show:", user);
            if (err) {
                console.log("Danger! Danger! Iminent Warp Core breach detected!");
                console.log("users.js show:", err)
            }
            res.json({user:user});
        })
        // res.json({placeholder:'show'});
    }
}
