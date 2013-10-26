module.exports = function(app) {



  app.get('/rentals', function(request, response) {
      return Rental.find({}, function (err, rentals) {
      if (!err) {
        return response.send(rentals);
      } else {
        return console.log(err);
      }
    });
  });

  app.post('/rentals', function(request, response) {
    var rental;
    rental = new Rental({
      returnedAt: request.body.returnedAt,
      receivedAt: request.body.receivedAt,
	  confirmationId: request.body.confirmationId,
    });
    rental.save(function (err) {
      if (!err) {
        return console.log("created");
      } else {
        return console.log(err);
      }
    });
    return response.send(rental);
  });

  app.get('/rentals/:id', function(request, response) {
       return Rental.findById(request.params.id, function (err, product) {
      if (!err) {
        return response.send(product);
      } else {
        return console.log(err);
      }
    });
  });

  app.put('/rentals/:id', function(request, response) {
    response.send('PUT /rentals');
  });

  app.delete('/rentals/:id', function(request, response) {
    response.send('DELETE /rentals');
  });

};
