var Request = require("../data/models.js").Request;

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
    return Request.findById(req.params.id, function (err, product) {
      if (!err) {
        return res.send(product);
      } else {
        return console.log(err);
      }
    });
  });
  
  app.get('/requests/:id/near_bikes', function(req,res){
    Request.findById(req.params.id, function(err, request){
      request.findNearBikes(function(err,bikes){
        return res.send(bikes);
      });
    });
  });

};
