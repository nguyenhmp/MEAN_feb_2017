//Require the Express Module
var express = require('express');
//Create an Express App
var app = express();
//Require mongoose
var mongoose = require('mongoose');
// Connect to Mongo db
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/dashboard');
var PangolinSchema = new mongoose.Schema({
 name: String,
 age: Number,
 size: Number,
 weight: Number
})
mongoose.model('Pangolin', PangolinSchema); // We are setting this Schema in our Models as 'Pangolin'
var Pangolin = mongoose.model('Pangolin') // We are retrieving this Schema from our Models, named 'Pangolin'
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

// Root Request - shows add Pangolin form and list of pangolins
app.get('/', function(req, res){
    //This is where we'll retrieve pangolins from the database.
    Pangolin.find({}, function(err, pangolins) {
        // console.log("pangolin find ran");
        if(err){
            console.log("Error on pangolin.find()" + err);
        } else {
            // console.log("find successful");
            // console.log("pangolin: " + pangolins[0]);
            res.render('index', {pangolinlist: pangolins});
        }
  // This is the method that finds all of the pangolins from the database
  // Notice how the first parameter is the options for what to find and the second is the
  //   callback function that has an error (if any) and all of the pangolins
  // Keep in mind that everything you want to do AFTER you get the pangolins from the database must
  //   happen inside of this callback for it to be synchronous
  // Make sure you handle the case when there is an error, as well as the case when there is no error
})
    // res.render('index', {pangolinlist: []});
})

// Add pangolin Request
app.post('/pangolins', function(req, res){
    console.log("POST DATA", req.body);
    // add pangolin here
    // create a new pangolin with the name and age corresponding to those from req.body
    var pangolin = new Pangolin({name: req.body.name, age: req.body.age, size: req.body.size, weight: req.body.weight});
    // Try to save that new pangolin to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    pangolin.save(function(err) {
        // if there is an error console.log that something went wrong!
        if(err) {
            console.log('something went wrong');
        } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully added a pangolin!');
            res.redirect('/');
        }
    })
})

// form to edit specific pangolin
app.get('/pangolins/edit/:id', function(req, res){
    Pangolin.findOne({_id: req.params.id}, function(err, pangolin){
        if(err){
            console.log("something went wrong: " + err);
        } else{
            console.log("found pangolin: " + pangolin);
            res.render('editPangolin', {pangolin: pangolin});
        }
    })
})

// process pangolin edit form, return to root
app.post('/pangolins/:id', function(req, res){
    console.log("edit-req.params.id: " + req.params.id);
    Pangolin.findOne({_id: req.params.id}, function(err, pangolin){
        if(err){
            console.log("something went wrong: " + err);
        } else {
            console.log("edit-found pangolin: " + pangolin);
            pangolin.name = req.body.name;
            pangolin.age = req.body.age;
            pangolin.size = req.body.size;
            pangolin.weight = req.body.weight;
            pangolin.save(function(err){
                console.log("edit-save error: " + err);
            })
            res.redirect('/');
        }
    })
})

// delete a pangolin
app.post('/pangolins/destroy/:id', function(req, res){
    Pangolin.remove({_id: req.params.id}, function(err){
        if(err){
            console.log("error on deletion: " + err);
        } else {
            res.redirect('/');
        }
    })
})

// Setting our Server to Listen on Port:8000
app.listen(8000, function(){
    console.log("listening or port 8000");
})
