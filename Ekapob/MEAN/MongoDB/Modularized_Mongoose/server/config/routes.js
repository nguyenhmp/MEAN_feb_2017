// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// Assignment: Modularized Mongoose

var heroes = require("../controllers/heroes.js")

module.exports = function (app) {
    // 1. Displays all heroes
    app.get('/', function(req, res) {
        heroes.show_all(req, res)
    })

    // 2. Displays form for making new hero
    app.get('/heroes/new', function(req, res) {
        heroes.new(req, res)
    })

    // 3. Create new hero in database
    app.post('/heroes/create', function(req, res) {
        heroes.create(req, res)
    })

    // 4. Shows details of specific hero
    app.get('/heroes/:id', function(req, res) {
        heroes.show(req, res)
    })

    // 5. Displays form for editing hero
    app.get('/edit/:id', function(req, res) {
        heroes.edit(req, res)
    })

    // 6. Updates hero in database
    app.post('/heroes/update/:id', function(req, res) {
        heroes.update(req, res)
    })

    // 7. Delete hero from database
    app.post('/heroes/destroy/:id', function(req, res) {
        heroes.delete(req, res)
    })
}
