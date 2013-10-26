module.exports = function(app) {

  app.get('/locations', function(request, response) {
    response.send('GET /locations');
  });

  app.post('/locations', function(request, response) {
    response.send('POST /locations');
  });

  app.get('/locations/:id', function(request, response) {
    response.send('GET /locations/'+request.params.id);
  });

  app.put('/locations/:id', function(request, response) {
    response.send('PUT /locations');
  });

  app.delete('/locations/:id', function(request, response) {
    response.send('DELETE /locations');
  });

};
