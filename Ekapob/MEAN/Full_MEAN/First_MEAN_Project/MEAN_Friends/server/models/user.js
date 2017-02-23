// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// Track: MEAN
// Course: Full MEAN
// Assignment: MEAN_Friends

console.log("User Model");

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    dob: {type: Date, required: true}
}, {timestamps: true})

var User = mongoose.model('User', UserSchema);
