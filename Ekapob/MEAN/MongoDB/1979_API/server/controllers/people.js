// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// Assignment: 1979 API

var mongoose = require('mongoose');
var Person = mongoose.model('Person');

module.exports = {
    show_all: function(req, res) {
        Person.find({}, function(err, people) {
            if (err) {
                console.log("Danger! Danger! Iminent Warp Core breach detected!" + err);
            }
            // for (var person in people){
            //     console.log(people[person].id);
            // }
            res.json({people:people});
        })
    },
    create: function (req, res) {
        var person = new Person({
            name: req.params.name
        });

        person.save(function(err) {
            if(err) {
                console.log('Unable to add new Person!' + err);
            }
            else {
                console.log('New Person added to database!');
            }
            res.redirect('/');
        })
    },
    show: function (req, res) {
        Person.findOne({name: req.params.name}, function(err, person) {
            if (err) {
                console.log("Danger! Danger! Iminent Warp Core breach detected!" + err);
            }
            res.json({person});
        })
    },
    delete: function (req, res) {
        Person.remove({name: req.params.name}, function (err) {
            if(err) {
                console.log('Unable to delete Person!' + err);
            }
            else {
                console.log('Person successfully deleted!');
            }
            res.redirect('/');
        })
    }
}
