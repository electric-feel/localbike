// get an express app
var express = require("express");
var app = express();
app.use(express.logger());

// connect to mongodb
var uristring =  process.env.MONGOLAB_URI || 'mongodb://localhost/localbike';
var mongoose = require('mongoose');
mongoose.connect(uristring, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
});

// a test method
app.get('/', function(request, response) {
  response.send('Hello World!');
});

// start app
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
