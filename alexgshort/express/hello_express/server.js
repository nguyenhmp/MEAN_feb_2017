// load express module
var express = require('express');
var bodyParser = require('body-parser');
// invoke var express
var app = express();
// handle base route
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');

app.get("/users", function(request, response){
    var users_array = [
        {name: "Michael", email: "michael email"},
        {name: "Jay", email: "Jay email"},
        {name: "Brendan", email: "Brendan email"},
        {name: "Andrew", email: "Andrew email"}
    ];
    response.render('index', {users: users_array});
})
app.get('/', function(request,response){
    response.send("<h1>Hello Express</h1>");
})

app.post('/users', function(req, res){
    console.log("POST DATA \n\n", req.body);
    res.redirect('/');
})
app.listen(8000, function(){
    console.log("listening on port 8000");
})
