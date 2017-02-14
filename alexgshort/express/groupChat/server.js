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
app.post('/login', function(req, res){
    username = req.body.name;
    res.render("index", {username: username});
})
// tell the express app to listen on port 8000
var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);

var chatter = [];
var users = [];

function chatterHTML(chatter){
    allChats = [];
    for(chat of chatter){
        allChats.push(
            app.render("message", {message: chat}, function(err, html){
                allChats.push(html);
            })
        )
    }
    console.log(`allChats: ${allChats}`);
    return allChats;
}

io.sockets.on('connection', function(socket){
    // console.log(socket.id);
    socket.on("add_user", function(data){
        users.push({id: socket.id, username: data.username});
        // console.log(`id: ${socket.id}, username: ${data.username}, Users: ${users[0]['username']}`);
        socket.emit("init_chatter", {data: chatterHTML(chatter)});
    })
    // console.log(`chatterHTML: ${chatterHTML(chatter)}`);
    socket.on('new_message', function(data){
        console.log("new message received");
        // console.log(data);
        chatter.push(data.message);
        console.log(chatter);
        // console.log(io.sockets.connected);
        // console.log("Socket ID: " + socket.id);
        // console.log("ip address: " + socket.handshake.address);
        app.render("message", {message: data.message},
            function(err, html){
                // console.log(err);
                io.emit("add_message", {new_message: html});
            }
        )
    })
    socket.on('disconnect', function(data){
        console.log("someone disconnected: " + socket.id);
    })
})
