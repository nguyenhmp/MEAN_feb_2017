// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// February 28, 2017
// Track: MEAN
// Course: Full MEAN
// Assignment: MEAN Wall

console.log('Server/Config/mongoose.js');
// require mongoose
var mongoose = require('mongoose');
// require the fs module for loading model files
var fs = require('fs');
// require path for getting the models path
var path = require('path');
// connect to mongoose!
mongoose.connect('mongodb://localhost/mean_wall');// create a variable that points to the path where all of the models live
var models_path = path.join(__dirname, './../models');
// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file) {
    if(file.indexOf('.js') >= 0) {
      // require the file (this runs the model file which registers the schema)
      require(models_path + '/' + file);
    }
});
