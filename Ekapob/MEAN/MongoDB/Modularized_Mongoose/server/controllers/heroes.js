// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// Assignment: Modularized Mongoose

var mongoose = require('mongoose');
var Hero = mongoose.model('Hero');

var races = ["Human", "Elf", "Dwarf", "Gnome", "Halfling"];
var classes = ["Fighter", "Rogue", "Wizard", "Cleric", "Monk"];

module.exports = {
    show_all: function(req, res) {
        Hero.find({}, function(err, heroes) {
            if (err) {
                console.log("Danger! Danger! Iminent Warp Core breach detected!" + err);
            }
            // for (var hero in heroes){
            //     console.log(heroes[hero].id);
            // }
            res.render("index", {heroes:heroes});
        })
    },
    new: function(req, res) {
        var options = {
            races: races,
            classes: classes
        }
        res.render("hero_new", {options:options});
    },
    create: function (req, res) {
        console.log("POST DATA:", req.body);
        var hero = new Hero({
            name: req.body.name,
            race: req.body.race,
            class: req.body.class,
            level: 1
        });

        hero.save(function(err) {
            if(err) {
                console.log('Unable to add new Hero!' + err);
            }
            else {
                console.log('New Hero registered!');
            }
            res.redirect('/');
        })
    },
    show: function (req, res) {
        Hero.findOne({_id: req.params.id}, function(err, hero) {
            if (err) {
                console.log("Danger! Danger! Iminent Warp Core breach detected!" + err);
            }
            res.render("hero_show", {hero});
        })
    },
    edit: function (req, res) {
        Hero.findOne({_id: req.params.id}, function(err, hero) {
            if (err) {
                console.log("Danger! Danger! Iminent Warp Core breach detected!" + err);
            }
            var options = {
                hero: hero,
                races: races,
                classes: classes
            }
            res.render("hero_edit", {options:options});
        })
    },
    update: function (req, res) {
        console.log("POST DATA:", req.body);

        Hero.update({_id: req.params.id}, {$set: {
            name: req.body.name,
            race: req.body.race,
            class: req.body.class,
            level: req.body.level}
        }, function (err) {
            if(err) {
                console.log('Unable to edit Hero!' + err);
            }
            else {
                console.log('Hero updated!');
            }
            res.redirect('/');
        })
    },
    delete: function (req, res) {
        console.log("POST DATA:", req.body);

        Hero.remove({_id: req.params.id}, function (err) {
            if(err) {
                console.log('Unable to delete Hero!' + err);
            }
            else {
                console.log('Hero successfully deleted!');
            }
            res.redirect('/');
        })
    }
}
