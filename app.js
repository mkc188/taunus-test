'use strict';

require("dot").process({
  global: "_page.render"
        , destination: __dirname + "/.bin/views/"
        , path: (__dirname + "/views")
});

require("dot").process({
  global: "_page.render"
        , destination: __dirname + "/.bin/views/home/"
        , path: (__dirname + "/views/home")
});

var taunus = require('taunus');
var taunusExpress = require('taunus-express');
var express = require('express');
var serveStatic = require('serve-static');
var app = express();
var options = {
  routes: require('./controllers/routes'),
  layout: require('./.bin/views/layout')
};

app.use(serveStatic('.bin/public'));
if (process.env.NODE_ENV == 'production') {
  app.use(serveStatic('dist'));
} else{
  app.use(serveStatic('.tmp'));
  app.use(serveStatic('app'));
}
app.use('/bower_components', serveStatic('bower_components'));
taunusExpress(taunus, app, options);
app.listen(3000);
