var mongoose = require('mongoose');
var messageBoard = require('../controllers/messageBoard.js');
module.exports = function(app){
// Root Request - shows add Pangolin form and list of pangolins
    app.get('/', function(req, res){
        messageBoard.index(req, res);
    })

    // Add message
    app.post('/createMessage', function(req, res){
        messageBoard.createMessage(req, res);
    })

    // Add comment
    app.post('/createComment/:id', function(req, res){
        messageBoard.createComment(req, res);
    })
}
