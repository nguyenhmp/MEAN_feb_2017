// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// Assignment: 1979 API

var people = require("../controllers/people.js")

module.exports = function (app) {
    // 1. Displays all peope born in 1979
    app.get('/', people.show_all)

    // 2. Adds name into database
    app.get('/new/:name', people.create)

    // 3. Removes name from database
    app.get('/remove/:name', people.delete)

    // 4. Displays document for specific person
    app.get('/:name', people.show)
}
