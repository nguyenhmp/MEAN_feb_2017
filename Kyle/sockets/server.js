var express = require('express')
var path = require('path')
var app = express()

app.use(express.static(path.join(__dirname, './static')))

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

app.get('/', function(request, response){
  response.render("index")
})

var server = app.listen(8000, function(){
  console.log("Listening on port 8000")
})

// after the line where we require 'socket.io', we are setting up the CONNECTION EVENT
var io = require('socket.io').listen(server)

// Whenever a connection event happens (the connection event is built in), run the following:
io.sockets.on('connection', function(socket){
  console.log("WE ARE USING SOCKETS!")
  console.log(socket.id)
  socket.on('button_clicked', function(data){
    console.log("Someone clicked a button! Reason: "+ data.reason)
    socket.emit("server_response", {response: "Sockets are fun!"})
  })
  // EMIT is socket.emit('my_emit_event')
  // BROADCAST is socket.broadcast.emit('my_broadcast_event')
  // FULL BROADCAST is io.emit('my_full_broadcast_emit')
})
