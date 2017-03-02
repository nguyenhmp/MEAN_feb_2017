// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// March 01, 2017
// Track: MEAN
// Course: Full MEAN
// Assignment: Discussion_Board

console.log("Server/Models/user.js");

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String,
        match: [/^[a-z0-9_]+$/i, "Username can only contain letters and numbers!"],
        maxlength: [20, "Username cannot exceed 20 characters!"],
        required: [true, "User name cannot be empty!"],
        trim: true
    },
    topics: [{type: Schema.Types.ObjectId, ref: "Topic"}],
    messages: [{type: Schema.Types.ObjectId, ref: "Message"}],
    comments: [{type: Schema.Types.ObjectId, ref: "Comment"}],
}, {timestamps: true});

var User = mongoose.model('User', UserSchema);
