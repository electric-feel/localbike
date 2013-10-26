var Request = require("../data/models.js").Request;
var Location = require("../data/models.js").Location;
var Bike = require("../data/models.js").Bike;

module.exports = function(app) {

  app.get('/api/requests', function(req, res) {
    return Request.find({}, function (err, requests) {
      if (!err) {
        return res.send(requests);
      } else {
        return console.log(err);
      }
    });
  });

  app.post('/api/requests', function(req, res) {
    var request = new Request({
      madeAt: Date(),
      madeBy: req.body.madeBy,
      location: [req.body.latitude, req.body.longitude],
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

  app.get('/api/requests/:id', function(req, res) {
    return Request.findById(req.params.id, function (err, request) {
      if (!err) {
        return res.send(request);
      } else {
        return console.log(err);
      }
    });
  });
  
  app.get('/api/requests/:id/near_bikes', function(req,res) {
    return Request.findById(req.params.id, function(err, request){
      Location.find({location:{$nearSphere: request.location, $maxDistance: 0.01}}, function(err, locations){
        bike_ids = locations.map(function(l){
          return l.bikeId;
        });
        bike_ids = bike_ids.filter(function(n){return n});
        Bike.find({_id: { $in: bike_ids }}, function(err, bikes){
          res.send(bikes);
        });
      });
    });
  });

};
