// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// Track: MEAN
// Course: Full MEAN
// Assignment: Login and Registration

console.log("Server/Controllers/users.js");

var mongoose = require('mongoose');
var User = mongoose.model('User');


module.exports = {
    create: function(req, res){
        var password = req.body.password;

        var user = new User({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            dob: req.body.dob,
            email: req.body.email,
            password: password
        });
        console.log("Server/Controllers/users.js - create:", user);

        user.confirm_password = req.body.confirm_password;

        user.save(function(err, user) {
            if(err) {
                console.log('Unable to add new User!' + err);
                res.json({err:err})
            }
            else {
                console.log('New User added to database!');
                console.log(user);
                res.json({user:user});
            }
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
    },

    login: function (req, res) {
        console.log("Server/Controllers/users.js - login:", req.body);
        var email = req.body.email;
        var password = req.body.password;


        User.findOne({email: email}, function(err, user) {
            console.log(err);
            console.log("users.js login:", req.body);
            console.log("users.js login:", user);
            if (user && bcrypt.compareSync(password, user.password)) {
                console.log("Successfully logged in!");
                res.json({user:user});
            }
            else {
                var err = {
                    err: "Email and/or password not found"
                }
                console.log("User not found");
                res.json({err})
            }
        })
    }
}
