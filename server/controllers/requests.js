var Request = require("../data/models.js").Request;

module.exports = function(app) {

  app.get('/requests', function(req, res) {
    return Request.find({}, function (err, requests) {
      if (!err) {
        return res.send(requests);
      } else {
        return console.log(err);
      }
    });
  });

  app.post('/requests', function(req, res) {
    var request = new Request({
      madeAt: Date(),
      madeBy: req.body.madeBy,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      hours: req.body.hours,
    });
    request.save(function (err) {
      if (!err) {
        return console.log("created");
      } else {
        return console.log(err);
      }
    });
    return res.send(request);
  });

  app.get('/requests/:id', function(req, res) {
    return Request.findById(req.params.id, function (err, product) {
      if (!err) {
        return res.send(product);
      } else {
        return console.log(err);
      }
    });
  });

};
