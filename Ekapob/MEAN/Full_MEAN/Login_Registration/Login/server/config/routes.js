// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// Track: MEAN
// Course: Login and Registration
// Assignment: Login and Registration

console.log('Server/Config/routes.js');

var users = require("../controllers/users.js");

module.exports = function(app){
    app.post('/new', users.create);
    app.post("/login", users.login);
    app.get("/success/:id", users.show);
}
