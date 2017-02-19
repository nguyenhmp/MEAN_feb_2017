// Ekapob Ukritnukun
// ThaiGQ@gmail.com

var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/message_board');

mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

var MessageSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 4},
    message: {type: String, required: true},
    comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]
}, {timestamps: true})

mongoose.model('Message', MessageSchema);
var Message = mongoose.model('Message')

var CommentSchema = new mongoose.Schema({
    _message: {type: Schema.Types.ObjectId, ref: "Message"},
    name: {type: String, required: true},
    comment: {type: String, required: true},
}, {timestamps: true});

mongoose.model('Comment', CommentSchema);
var Comment = mongoose.model('Comment')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    Message.find({}).populate("comments").exec(function(err, messages) {
        if (err) {
            console.log("Danger! Danger! Imminent Warp Core breach detected!" + err);
        }
        res.render("index", {messages:messages});
    })
})

app.post('/create_message', function(req, res) {
    console.log("POST DATA:", req.body);
    var message = new Message({
        name: req.body.name,
        message: req.body.message,
    });

    message.save(function(err) {
        if(err) {
            console.log('Unable to add new Message!' + err);
        }
        else {
            console.log('New Message successfully added!');
        }
        res.redirect('/');
    })
})

//add comments to messages
app.post('/message/:id', function(req, res) {
    console.log("POST DATA:", req.body);
    Message.findOne({_id: req.params.id}, function(err, message){
        var comment = new Comment({
            _message: message._id,
            name: req.body.name,
            comment: req.body.comment,
        });

        message.comments.push(comment)
        comment.save(function(err) {
            message.save(function(err){
                if(err) {
                    console.log('Unable to add new Comment!' + err);
                }
                else {
                    console.log('New Comment successfully added!');
                }
                res.redirect('/');
            })
        })

    })
})

app.listen(8000, function() {
    console.log("listening on port 8000");
});
