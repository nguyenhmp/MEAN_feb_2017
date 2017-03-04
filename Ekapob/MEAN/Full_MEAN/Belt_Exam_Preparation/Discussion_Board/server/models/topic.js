// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// March 01, 2017
// Track: MEAN
// Course: Full MEAN
// Assignment: Discussion_Board

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
    upvotes: {
        type: Number,
    },
    downvotes: {
        type: Number,
    },
    comments: [CommentSchema]
}, {timestamps: true});

var TopicSchema = new Schema({
    _user: {type: Schema.Types.ObjectId, ref: "User"},
    title: {
        type: String,
        required: [true, "Title cannot be empty!"],
    },
    description: {
        type: String,
        required: [true, "Description cannot be empty!"],
    },
    category: {
        type: String,
        required: [true, "Category cannot be empty!"],
    },
    messages: [MessageSchema]
}, {timestamps: true});

var Topic = mongoose.model('Topic', TopicSchema);
var Message = mongoose.model('Message', MessageSchema);
var Comment = mongoose.model('Comment', CommentSchema);
