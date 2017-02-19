// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// Assignment: Modularized Mongoose

var mongoose = require('mongoose');

var HeroSchema = new mongoose.Schema({
    name: String,
    race: String,
    class: String,
    level: Number,
})

var Hero = mongoose.model('Hero', HeroSchema);
