var mongoose = require('mongoose');
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');
module.exports = {
    index: function(req, res){
        //This is where we'll retrieve pangolins from the database.
        Message.find()
            .populate('comments')
            .exec(function(err, messages) {
                if(err){
                    console.log("Error on message.find()" + err);
                } else {
                    console.log("messages: " + messages)
                    res.render('index', {messages: messages});
                }
        })
    },
    createMessage: function(req, res){
        console.log("POST DATA", req.body);
        var message = new Message();
        message.name = req.body.name;
        message.message = req.body.message;
        message.save(function(err) {
            // if there is an error console.log that something went wrong!
            if(err) {
                console.log('message save-something went wrong: ' + err);
            } else {
                console.log('successfully added a message!');
                res.redirect('/');
            }
        })
    },
    createComment: function(req, res){
        console.log("createComment-req.params.id: " + req.params.id);
        Message.findOne({_id: req.params.id}, function(err, message){
            if(err){
                console.log("createComment-find message error: " + err);
            } else {
                console.log("edit-found message: " + message);
                var comment = new Comment();
                comment.name = req.body.name;
                comment.comment = req.body.comment;
                comment._message = message._id;
                console.log("new comment: " + comment);
                comment.save(function(err){
                    if(err){
                        console.log("create comment error: " + err);
                    } else {
                        message.comments.push(comment);
                        message.save(function(err){
                            if(err){
                                console.log('comment-message save error: ' + err);
                            } else {
                                res.redirect('/');
                            }
                        })
                    }
                })
            }
        })
    }
}
