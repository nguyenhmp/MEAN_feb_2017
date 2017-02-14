// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
 res.render("index");
})

app.post('/users', function(req, res) {
 console.log("POST DATA", req.body);
 var submitted_info = {
 	name: req.body.name,
 	location: req.body.location,
 	fav_lang: req.body.fav_lang,
 	comment: req.body.comment
 }
 res.render("result", {user_data: submitted_info});
})


app.listen(8000, function() {
 console.log("listening on port 8000");
});