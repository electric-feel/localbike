module.exports = function(app) {

  app.get('/requests', function(req, response) {
    return RequestModel.find({}, function (err, requests) {
      if (!err) {
        return res.send(requests);
      } else {
        return console.log(err);
      }
    )};
  });

  app.post('/requests', function(req, res) {
    console.log(req.body);
    var request = new Request({
      madeAt: Date(),
      madeBy: req.body.madeBy,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      hours req.body.hours,
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
    )};
  });

  app.put('/requests/:id', function(req, response) {
    response.send('PUT /requests');
  });

  app.delete('/requests/:id', function(req, response) {
    response.send('DELETE /requests');
  });

};
