var express = require("express");
var app = express();

app.set("views", __dirname + "/views");
app.set("views engine", "ejs");
app.use(bp.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname + "/static")));

app.get('/samurais', function(req, res) {
    res.render("index", {samurais});
})

app.get("samurais/new", function(req, res)) {
    res.render("samurais_new");
}

app.post("samurais/create", function (req, res) {
    res.redirect("/samurai_show");
})

app.get("samurais/show/:id", function (req, res) {
    res.render("samurai_show");
})

app.get("samurais/edit/:id", function (req, res) {
    res.render("samurai_edit");
})

app.post("samurais/update/:id", function (req, res) {
    res.redirect("/samurai_show");
})

app.post("samurais/delete/:id", function (req, res) {
    res.redirect("/");
})

app.listen(7000, function () {

})
