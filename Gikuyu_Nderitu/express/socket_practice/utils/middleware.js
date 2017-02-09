module.exports = function(app, express) {
	'use strict';
	app.use(express.static(__dirname + '/../static'))
	app.use(express.static(__dirname + '/../bower_components'))
	app.set('views', __dirname + '/../views')
	app.set('view engine', 'pug')
	console.log('Middleware initialized');
};
