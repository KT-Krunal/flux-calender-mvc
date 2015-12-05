// serve the app
'use strict';

//Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Setup Express Server for API as well as Client app
var express        = require('express');
var app            = express();
var server         = require('http').createServer(app);
var config         = require('./api/config/env');
var http           = require('http');
var bodyParser     = require('body-parser');

// api routes
var apiRoutes      = require('./api/routes')(app, express);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

// setup API route
app.use('/api', apiRoutes);

// serve the app
app.use(express.static('public'));


// Start server
server.listen(config.port, function () {
  var port = server.address().port;
  console.log('App listening at port %d', config.port);
});

exports = module.exports = app;




