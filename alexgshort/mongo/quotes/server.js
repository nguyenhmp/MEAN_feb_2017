//Require the Express Module
var express = require('express');
//Create an Express App
var app = express();
//Require mongoose
var mongoose = require('mongoose');
// Connect to Mongo db
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/dojoquotes');
var QuoteSchema = new mongoose.Schema({
 name: String,
 quote: String
})
mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'User'
var Quote = mongoose.model('Quote') // We are retrieving this Schema from our Models, named 'User'
// Use native promises
mongoose.Promise = global.Promise;
// assert.equal(query.exec().constructor, global.Promise);

//Require body-parser (to receiev post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our app
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');


//Routes
// Root Request
app.get('/', function(req, res){
    res.render('index');
})

// display list of quotes
app.get('/quotes', function(req, res){
    //This is where we'll retrieve users from the database.
    Quote.find({}, function(err, quotes) {
        console.log("quote find ran");
        if(err){
            console.log("quotes-Error on quote.find()" + err);
        } else {
            console.log("quotes-find successful");
            console.log("quote: " + quotes[0]);
            res.render('quotelist', {quotes: quotes});
        }
    }).sort('-_id');
})


// Add User Request
app.post('/quotes', function(req, res){
    console.log("POST DATA", req.body);
    var newQuote = new Quote({name: req.body.name, age: req.body.quote});
    newQuote.save(function(err) {
        // if there is an error console.log that something went wrong!
        if(err) {
            console.log('quote save-something went wrong: ' + err);
        } else {
            console.log('successfully added a quote');
            res.redirect('/');
        }
    })
})
// Setting our Server to Listen on Port:8000
app.listen(8000, function(){
    console.log("listening or port 8000");
})
