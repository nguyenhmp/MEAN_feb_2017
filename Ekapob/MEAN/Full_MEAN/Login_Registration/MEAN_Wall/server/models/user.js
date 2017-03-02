// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// February 28, 2017
// Track: MEAN
// Course: Full MEAN
// Assignment: MEAN Wall

console.log("Server/Models/user.js");

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        match: [/^[a-z0-9_]+$/i, "Username can only contain letters and numbers!"],
        maxlength: [20, "Username cannot exceed 20 characters!"],
        required: [true, "User name cannot be empty!"],
        trim: true
    }
}, {timestamps: true});

var User = mongoose.model('User', UserSchema);
