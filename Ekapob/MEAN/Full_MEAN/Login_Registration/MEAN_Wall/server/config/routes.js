// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// February 28, 2017
// Track: MEAN
// Course: Full MEAN
// Assignment: MEAN Wall

console.log('Server/Config/routes.js');

var users = require("../controllers/users.js");
var messages = require("../controllers/messages.js");

module.exports = function(app){
    app.post("/login", users.login);
    app.get("/dashboard", messages.all_messages);
    app.post("/createMessage", messages.create_message);
    app.post("/createComment/:messageID", messages.create_comment);
}
