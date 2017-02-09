const session = require('express-session');

module.exports = function(app, express, bp, style) {
	'use strict';
	// Route setup
	app.use(express.static(__dirname + '/../static'))
	app.use(express.static(__dirname + '/../bower_components'))
	app.use(bp.urlencoded({extended: true}))
	app.use(session({secret: 'awesomesecret'}))
	app.set('views', __dirname + '/../views')
	app.set('view engine', 'pug')

	console.log('Middleware initialized');
};
