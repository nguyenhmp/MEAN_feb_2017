var express = require("express")
var app = express()
var bodyParser = require('body-parser')
var session = require('express-session')

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname + "/static"))
app.use(session({secret:'codingdojorocks'}))

app.set('views', __dirname + "/views")
app.set('view engine', 'ejs')

app.get('/', function(request, response){
  console.log(session.name)
  response.send("<h1>Hello Express</h1>")
})
app.get('/users', function(request, response){
  var users_array = [
    {name: "Michael", email:"michael@codingdojo.com"},
    {name: "Jay", email:"jay@codingdojo.com"},
    {name: "Brendan", email:"brendan@codingdojo.com"},
    {name: "Andrew", email:"andrew@codingdojo.com"}
  ]
  response.render('users', {users: users_array})
})
app.get("/users/:id", function(request, response){
  console.log("The requested User ID is:", request.params.id)
  response.send("You requested User ID: "+request.params.id)
})
app.post('/users', function(request, response){
  console.log("POST DATA:", request.body)
  response.redirect('/')
})
app.listen(8000, function(){
  console.log("Now running Express on Port 8000")
})
