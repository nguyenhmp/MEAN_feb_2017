// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// Assignment: 1979 API

var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema({
    name: String,
})

var Person = mongoose.model('Person', PersonSchema);
