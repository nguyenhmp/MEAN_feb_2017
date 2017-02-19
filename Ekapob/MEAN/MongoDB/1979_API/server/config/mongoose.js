// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// Assignment: 1979 API

var mongoose = require('mongoose');
var fs = require("fs");
var path = require("path");

mongoose.connect('mongodb://localhost/1979');

mongoose.Promise = global.Promise;

var models_path = path.join(__dirname, "./../models");

fs.readdirSync(models_path).forEach(function (file) {
    if (file.indexOf(".js") >= 0) {
        require(models_path + "/" + file);
    }
})
