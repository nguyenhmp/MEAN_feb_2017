var express = require('express')
var path = require('path')
var app = express()
count = 0

app.set('views', path.join(__dirname, "./views"))
app.set('view engine', 'ejs')

app.get('/', function(request, response){
  response.render('index')
})

var server = app.listen(6789, function(){
  console.log("Listening on port 6789")
})
var io = require('socket.io').listen(server)
io.sockets.on('connection', function(socket){
  socket.on('button_clicked', function(){
    count += 1
    io.emit('button_updated', {button_value:count})
  })
  socket.on('reset_clicked', function(){
    count = 0
    io.emit('button_updated',{button_value:count} )
  })
})
