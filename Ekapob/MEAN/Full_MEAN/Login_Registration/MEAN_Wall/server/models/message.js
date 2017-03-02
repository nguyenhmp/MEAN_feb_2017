// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// February 28, 2017
// Track: MEAN
// Course: Full MEAN
// Assignment: MEAN Wall

console.log("Server/Models/message.js");

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    _user: {type: Schema.Types.ObjectId, ref: "User"},
    comment: {
        type: String,
        required: [true, "Comment cannot be empty!"],
    }
}, {timestamps: true});

var MessageSchema = new Schema({
    _user: {type: Schema.Types.ObjectId, ref: "User"},
    message: {
        type: String,
        required: [true, "Message cannot be empty!"],
    },
    comments: [CommentSchema]
}, {timestamps: true});

var Message = mongoose.model('Message', MessageSchema);
