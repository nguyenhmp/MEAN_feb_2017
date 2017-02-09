const express = require('express');
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static( __dirname + '/static'))
app.set('views', __dirname +'/views')
app.set('view engine', 'pug')


app.get('/', function (req, res) {
	console.log('Hit root route');
	const array = [
		{name: "Michael", email: "michael@codingdojo.com"},
		{name: "Jay", email: "jay@codingdojo.com"},
		{name: "Brendan", email: "brendan@codingdojo.com"},
		{name: "Andrew", email: "andrew@codingdojo.com"}
	]
	res.render('index', {users: array})
})


app.listen(1337, function () {
	console.log('Running on the 1337 port');
})
