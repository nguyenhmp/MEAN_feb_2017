// Ekapob Ukritnukun
// ThaiGQ@gmail.com

var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/quoting_dojo_redux');

mongoose.Promise = global.Promise;

var QuoteSchema = new mongoose.Schema({
    name: String,
    quote: String,
    created_at: { type: Date, default: Date.now }
})
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render("index");
})

app.post('/create', function(req, res) {
    console.log("POST DATA:", req.body);
    var quote = new Quote({
        name: req.body.name,
        quote: req.body.quote
    });

    quote.save(function(err) {
        if(err) {
            console.log('Unable to add new Quote!' + err);
        }
        else {
            console.log('New Quote added successfully!');
        }
        res.redirect('/');
    })
})

app.get('/quotes', function(req, res) {
    Quote.find({}, function(err, quotes) {
        if (err) {
            console.log("Danger! Danger! Imminent Warp Core breach detected!" + err);
        }
        res.render("quotes", {quotes:quotes});
    })
})

app.listen(8000, function() {
    console.log("listening on port 8000");
});
