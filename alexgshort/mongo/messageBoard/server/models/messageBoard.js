// require mongoose
var mongoose = require('mongoose');
// create Schema
var Schema = mongoose.Schema;

var messageSchema = new mongoose.Schema({
 name: { type: String, required:true, minlength: 4},
 message: { type: String, required: true},
 comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true});

var commentSchema = new mongoose.Schema({
    _message: {type: Schema.Types.ObjectId, ref: 'Message'},
    name: {type: String, required: true, minlength: 4},
    comment: {type: String, required: true},
}, {timestamps: true });

// register schema as a model
mongoose.model('Message', messageSchema);
mongoose.model('Comment', commentSchema);

var Message = mongoose.model('Message');
var Comment = mongoose. model('Comment');

// Use native promises
mongoose.Promise = global.Promise;
