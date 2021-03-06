Bike = require('../data/models.js').Bike;

module.exports = function(app) {

  app.get('/api/bikes', function(request, response) {
	  return Bike.find({}, function (err, product) {
      if (!err) {
        return response.send(product);
      } else {
        return console.log(err);
      }
    });
  });

  app.post('/api/bikes', function(request, response) {
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

  app.get('/api/bikes/:id', function(request, response) {
      return Bike.findById(request.params.id, function (err, product) {
      if (!err) {
        return response.send(product);
      } else {
        return console.log(err);
      }
    });
  });

};
