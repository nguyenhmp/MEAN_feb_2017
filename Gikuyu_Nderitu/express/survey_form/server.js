'use strict'
//Import Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const middleware = require('./utils/middleware');
//Initialize express
const app = express()

//Start customized middleware
middleware(app, express, bodyParser)


//Set up routes
// GET Routes
app.get('/', function (req, res) {

	req.session.destroy()

	return res.render('index')
})

app.get('/results', function (req, res) {
	('Hit results route');
	return res.render('results', {name: req.session.name, loc: req.session.loc, lang: req.session.lang, comment: req.session.comment})
})

app.post('/process', function (req, res) {
	let name = req.body.name,
		loc = req.body.loc,
		lang = req.body.lang,
		comment = req.body.comment
	if(name && loc && lang){
		req.session.name = name
		req.session.loc = loc
		req.session.lang = lang
		req.session.comment = comment
		return res.redirect('/results')
	}

	return res.redirect('/')
})

app.listen(1337, function () {
	console.log('Running on the 1337 port!');
})
