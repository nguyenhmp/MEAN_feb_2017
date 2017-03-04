// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// March 01, 2017
// Track: MEAN
// Course: Full MEAN
// Assignment: Discussion_Board

console.log('Server/Config/routes.js');

var users = require("../controllers/users.js");
var topics = require("../controllers/topics.js");

module.exports = function(app){
    app.post("/login", users.login);
    app.get("/dashboard", topics.all_topics);
    app.post("/createTopic", topics.create_topic);
    app.get("/user/:userID", users.show_user);
    app.get("/topic/:topicID", topics.show_topic);
    app.post("/createMessage/:topicID", topics.create_message);
    app.put("/vote/:messageID", topics.vote);
    app.post("/createComment/:messageID", topics.create_comment);
}
