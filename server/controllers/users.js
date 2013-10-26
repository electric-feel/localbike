module.exports = function(app) {

  app.get('/users', function(request, response) {
    response.send('GET /users');
  });

  app.post('/users', function(request, response) {
    response.send('POST /users');
  });

  app.get('/users/:id', function(request, response) {
    response.send('GET /users/'+request.params.id);
  });

  app.put('/users/:id', function(request, response) {
    response.send('PUT /users');
  });

  app.delete('/users/:id', function(request, response) {
    response.send('DELETE /users');
  });

};
