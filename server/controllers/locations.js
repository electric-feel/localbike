var Location = require('../data/models.js').Location;

module.exports = function(app) {

  app.get('/api/locations', function(request, response) {
    return Location.find({}, function (err, locations) {
      if (!err) {
        return response.send(locations);
      } else {
        return console.log(err);
      }
    });
  });

  app.post('/api/locations', function(request, response) {
    var location;
    location = new Location({
      bikeId: request.body.bikeId,
      latitude: request.body.latitude,
      longitude: request.body.longitude    
    });
    location.save(function (err) {
      if (!err) {
        return console.log("created");
      } else {
        return console.log(err);
      }
    });
    return response.send(location);
  });

  app.get('/api/locations/:id', function(request, response) {
    return Location.findById(request.params.id, function (err, location) {
      if (!err) {
        return response.send(location);
      } else {
        return console.log(err);
      }
    });
  });

};
