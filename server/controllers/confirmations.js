module.exports = function(app) {

  app.get('/confirmations', function(request, response) {
      return Confirmation.find({}, function (err, product) {
      if (!err) {
        return response.send(product);
      } else {
        return console.log(err);
      }
    });
  });

  app.post('/confirmations', function(request, response) {
    var confirmation;
    confirmation = new Confirmation({
		sentTo: req.body.sentTo,
		confirmedAt: req.body.confirmedAt,
		declinedAt: req.body.declinedAt,
		acceptedAt: req.body.acceptedAt,
		requestId: req.body.requestId,
		bikeId: req.body.bikeId,
		locationId: req.body.locationId
    });
    confirmation.save(function (err) {
      if (!err) {
        return console.log("created");
      } else {
        return console.log(err);
      }
    });
    return response.send(confirmation);
  });

  app.get('/confirmations/:id', function(request, response) {
      return Confirmation.findById(request.params.id, function (err, product) {
      if (!err) {
        return response.send(product);
      } else {
        return console.log(err);
      }
    });
  });

  app.put('/confirmations/:id', function(request, response) {
    response.send('PUT /confirmations');
  });

  app.delete('/confirmations/:id', function(request, response) {
    response.send('DELETE /confirmations');
  });

};
