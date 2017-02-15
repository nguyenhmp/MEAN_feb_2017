// require express
var express = require("express");
var path = require("path");
// create the express app
var app = express();
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})
// tell the express app to listen on port 8000
var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket){
    console.log("we have sockets");
    console.log(socket.id);
    socket.on('posting_form', function(data){
        randNum = Math.floor(Math.random()*1000)+1;
        response = `You emitted the following information to the server: '{name: ${data.name}', location: '${data.location}', language: '${data.language}', comment: '${data.comment}'}, <br />Your lucky number emitted by the server is ${randNum}.`;
        socket.emit("server_response", {response: response});
    })
})
