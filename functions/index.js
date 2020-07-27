const functions = require ('firebase-functions');
const express = require ('express');

// load the things we need
const app = express ();

// set the view engine to ejs
app.set ('views', './views');
app.set ('view engine', 'ejs');

// index page
app.get ('/', function (request, response) {
  response.render ('pages/index', {
    name: 'index',
  });
});

app.get ('/about', function (request, response) {
  response.render ('pages/about', {
    name: 'about',
  });
});

app.get ('/recent', function (request, response) {
  response.render ('pages/recent', {
    name: 'news',
  });
});

app.get ('/workshops', function (request, response) {
  response.render ('pages/workshops', {
    name: 'workshops',
  });
});

app.get ('/stempower', function (request, response) {
  response.render ('pages/stempower', {
    name: 'STEMpower',
  });
});

app.get ('/stempower17', function (request, response) {
  response.render ('pages/stempower17', {
    name: 'STEMpower17',
  });
});

app.get ('/stempower18', function (request, response) {
  response.render ('pages/stempower18', {
    name: 'STEMpower18',
  });
});

app.get ('/stempower19', function (request, response) {
  response.render ('pages/stempower19', {
    name: 'STEMpower19',
  });
});

app.get ('/fuse', function (request, response) {
  response.render ('pages/fuse', {
    name: 'fuse',
  });
});

app.get ('/fuse17', function (request, response) {
  response.render ('pages/fuse17', {
    name: 'fuse17',
  });
});

app.get ('/fuse19', function (request, response) {
  response.render ('pages/fuse19', {
    name: 'fuse19',
  });
});

app.get ('/ccd', function (request, response) {
  response.render ('pages/ccd', {
    name: 'CCD',
  });
});

app.get ('/lwb', function (request, response) {
  response.render ('pages/lwb', {
    name: 'LWB',
  });
});
app.get ('/junto', function (request, response) {
  response.render ('pages/junto', {
    name: 'junto',
  });
});

app.get ('/contact', function (request, response) {
  response.render ('pages/contact', {
    name: 'contact',
  });
});

app.get ('/voting', function (request, response) {
  response.render ('pages/voting', {
    name: 'voting',
  });
});

app.get ('/workshops/slides/dhruv-product', function (request, response) {
  response.redirect (
    'https://docs.google.com/presentation/d/163BYZWP9KoOMlv-mcqX_8je9bSCBfyMVGR2yumHn55c/edit?usp=sharing'
  );
});

app.get ('/workshops/slides/dhvani-api', function (request, response) {
  response.redirect (
    'https://docs.google.com/presentation/d/1x8ectrWsf0H1GSnm3dMKnkcuA0UPh9-jzRlM_-MakvI/edit?usp=sharing'
  );
});

app.get ('/workshops/slides/dhruv-retool', function (request, response) {
  response.redirect (
    'https://docs.google.com/presentation/d/1ey_m1c9fOlp-tStaZHn-VG_YKV5RDJHD6pI3PUVbrHY/edit?usp=sharing'
  );
});

app.get ('/workshops/slides/krish-scripts', function (request, response) {
  response.redirect (
    'https://docs.google.com/presentation/d/1qxugXKdI81jOR5uo2t9QxZLxNTpo9YwRZ-A4FoOOiu8/edit?usp=sharing'
  );
});

exports.app = functions.https.onRequest (app);
