var express = require('express')
var path = require('path')
var app = express()
message_thread = []
active_users = []

app.use(express.static(path.join(__dirname, "./static")))

app.set('views', path.join(__dirname, "./views"))
app.set('view engine', 'ejs')

app.get('/', function(request, response){
  response.render('index')
})

var server = app.listen(8000, function(){
  console.log("Listening on port 8000")
})
var io = require('socket.io').listen(server)
io.sockets.on('connect', function(socket){
  console.log("CONNECTED: ", socket.id)
  socket.on('new_user_connected', function(data){
    var new_user = {
      name:data.name,
      socket_id:socket.id
    }
    for(var i=0; i<message_thread.length; i++){
      var message = message_thread[i]
      socket.emit('populate_existing_messages', {message:message})
    }
    for(var i=0; i<active_users.length; i++){
      var user = active_users[i]
      socket.emit('populate_existing_users', user)
    }
    active_users.push(new_user)
    socket.broadcast.emit('new_user_update', {user:new_user})
  })
  socket.on('message_posted', function(data){
    io.emit('new_message', {message:data})
  })
  socket.on('update_message_thread', function(data){
    message_thread.push(data.message)
  })
  socket.on('disconnect', function () {
    var this_user_socket_id = socket.id
    for(var i=0; i<active_users.length;i++){
      if(active_users[i].socket_id == this_user_socket_id){
        active_users[i].name = null
        active_users[i].socket_id = null
      }
    }
    io.emit('user_logged_out', {socket:this_user_socket_id})
  })
})
