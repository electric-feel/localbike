// get an express app
var express = require("express");
var app = express();
app.use(express.logger());
app.use(express.bodyParser());

app.use(express.compress());
app.use('/', express.static('../client'));

// connect to mongodb
var uristring =  process.env.MONGOLAB_URI || 'mongodb://localhost/localbike';
var mongoose = require('mongoose');
mongoose.connect(uristring, function (err, res) {
  if (err) {
    console.log ('Failed connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
});

// load controllers
require("./controllers/website.js")(app);
require("./controllers/bikes.js")(app);
require("./controllers/confirmations.js")(app);
require("./controllers/locations.js")(app);
require("./controllers/rentals.js")(app);
require("./controllers/requests.js")(app);
require("./controllers/users.js")(app);

// start app
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
