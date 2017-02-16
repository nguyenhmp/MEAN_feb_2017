// Ekapob Ukritnukun
// ThaiGQ@gmail.com

var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongoose_dashboard');

mongoose.Promise = global.Promise;

var HeroSchema = new mongoose.Schema({
    name: String,
    race: String,
    class: String,
    level: Number,
})
mongoose.model('Hero', HeroSchema);
var Hero = mongoose.model('Hero')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var races = ["Human", "Elf", "Dwarf", "Gnome", "Halfling"];
var classes = ["Fighter", "Rogue", "Wizard", "Cleric", "Monk"];

// 1. Displays all heroes
app.get('/', function(req, res) {
    Hero.find({}, function(err, heroes) {
        if (err) {
            console.log("Danger! Danger! Iminent Warp Core breach detected!" + err);
        }
        // for (var hero in heroes){
        //     console.log(heroes[hero].id);
        // }
        res.render("index", {heroes:heroes});
    })
})

// 2. Displays form for making new hero
app.get('/heroes/new', function(req, res) {
    var options = {
        races: races,
        classes: classes
    }
    res.render("hero_new", {options:options});
})

// 3. Create new hero in database
app.post('/heroes/create', function(req, res) {
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
})

// 4. Shows details of specific hero
app.get('/heroes/:id', function(req, res) {
    Hero.findOne({_id: req.params.id}, function(err, hero) {
        if (err) {
            console.log("Danger! Danger! Iminent Warp Core breach detected!" + err);
        }
        res.render("hero_show", {hero});
    })
})

// 5. Displays form for editing hero
app.get('/edit/:id', function(req, res) {
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
})

// 6. Updates hero in database
app.post('/heroes/update/:id', function(req, res) {
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
})

// 7. Delete hero from database
app.post('/heroes/destroy/:id', function(req, res) {
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
})

app.listen(8000, function() {
    console.log("listening on port 8000");
});
