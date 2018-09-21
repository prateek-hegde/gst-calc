var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

var db = mongoose.connection;

const port = process.env.PORT || 3000;

//add cors
app.use(cors();)

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// serve static files from template
app.use(express.static(__dirname + '/views'));

// include routes
var routes = require('./routes/router');
app.use('/', routes);

//api
var api = require('./routes/api');
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});

//Setting headers
app.use((req, res, next) => {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  res.setHeader('Access-control-Allow-Headers', 'Content-Type, Access-control-Allow-Headers, Authorization');

  next();
});

// listen on available port
app.listen(port, function () {
  console.log(`Express app listening on port ${port}`);
});
