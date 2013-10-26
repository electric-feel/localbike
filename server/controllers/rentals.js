module.exports = function(app) {

  app.get('/rentals', function(request, response) {
    response.send('GET /rentals');
  });

  app.post('/rentals', function(request, response) {
    response.send('POST /rentals');
  });

  app.get('/rentals/:id', function(request, response) {
    response.send('GET /rentals/'+request.params.id);
  });

  app.put('/rentals/:id', function(request, response) {
    response.send('PUT /rentals');
  });

  app.delete('/rentals/:id', function(request, response) {
    response.send('DELETE /rentals');
  });

};
