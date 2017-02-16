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
 res.render("index", {numCount: 0});
})
// tell the express app to listen on port 8000
var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);
var numCount = 0;
var numCountText = `${numCount} times.`

// pluralize numCount
numCountText = function(numCount){
    if(numCount == 1){
        return `${numCount} time.`;
    } else {
        return `${numCount} times.`;
    }
}

io.sockets.on('connection', function(socket){
    socket.emit("init_count", {numCount: numCountText(numCount)});
    socket.on('button_push', function(data){
        console.log("epic button pushed");
        numCount++;
        io.emit("new_pushCount", {numCount: numCountText(numCount)});
    })
    socket.on('reset_push', function(data){
        console.log("reset button pushed");
        numCount = 0;
        io.emit("new_pushCount", {numCount: numCountText(numCount)});
    })
})
