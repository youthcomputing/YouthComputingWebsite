const functions = require('firebase-functions');
const express = require('express');

// load the things we need
const app = express();

// set the view engine to ejs
app.set('views', './views');
app.set('view engine', 'ejs');

// index page 
app.get('/', function(request, response) {
	response.render('pages/index', {
		name: 'index'
	});
});

app.get('/about', function(request, response) {
	response.render('pages/about', {
		name: 'about'
	});
});

app.get('/contact', function(request, response) {
	response.render('pages/contact', {
		name: 'contact'
	});
});

exports.app = functions.https.onRequest(app);





