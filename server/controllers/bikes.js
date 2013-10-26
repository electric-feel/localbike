module.exports = function(app) {

  app.get('/bikes', function(request, response) {
	  return Bike.find({}, function (err, product) {
      if (!err) {
        return response.send(product);
      } else {
        return console.log(err);
      }
    });
  });

  app.post('/bikes', function(request, response) {
    var bike;
    bike = new Bike({
		description: request.body.description,
		photo: request.body.photo,
		code: request.body.code,
		userId: request.body.userId
    });
    bike.save(function (err) {
      if (!err) {
        return console.log("created");
      } else {
        return console.log(err);
      }
    });
    return response.send(bike);
  });

  app.get('/bikes/:id', function(request, response) {
      return Bike.findById(request.params.id, function (err, product) {
      if (!err) {
        return response.send(product);
      } else {
        return console.log(err);
      }
    });
  });

  app.put('/bikes/:id', function(request, response) {
    response.send('PUT /bikes');
  });

  app.delete('/bikes/:id', function(request, response) {
    response.send('DELETE /bikes');
  });

};
