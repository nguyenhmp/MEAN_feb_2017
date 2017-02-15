// require mongoose
var mongoose = require('mongoose')
// require the fs module for loading model files
var fs = require('fs');
// Require path
var path = require('path');
// Connect to Mongo db
mongoose.connect('mongodb://localhost/dashboard');
// create a variable that points to the path where all of the models live
var models_path = path.join(__dirname, './../models');
// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js') >= 0){
        // require the file (this runs the model file which registers the schema)
        require(models_path + '/' + file);
    }
});
