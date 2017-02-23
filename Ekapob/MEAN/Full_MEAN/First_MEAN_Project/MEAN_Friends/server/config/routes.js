// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// Track: MEAN
// Course: Full MEAN
// Assignment: MEAN_Friends

console.log('routes.js');

var users = require("../controllers/users.js")

module.exports = function(app){
    app.get('/index', users.index);
    app.get('/show/:id', function(req, res) {
        console.log(req.body);
      users.show(req, res);
    });
    app.post('/new', users.create);
    app.put('/edit/:id', function(req, res) {
        console.log(req.body);
      users.update(req, res);
    });
    app.delete('/delete/:id', function(req, res) {
        console.log("routes.js delete:", req.params.id);
      users.delete(req, res);
    });
}
// this adds route listeners to friends for 5 of the 7 RESTful routes, excluding new and edit.
