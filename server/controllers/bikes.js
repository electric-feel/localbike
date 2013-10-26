module.exports = function(app) {

  app.get('/bikes', function(request, response) {
    response.send('GET /bikes');
  });

  app.post('/bikes', function(request, response) {
    response.send('POST /bikes');
  });

  app.get('/bikes/:id', function(request, response) {
    response.send('GET /bikes/'+request.params.id);
  });

  app.put('/bikes/:id', function(request, response) {
    response.send('PUT /bikes');
  });

  app.delete('/bikes/:id', function(request, response) {
    response.send('DELETE /bikes');
  });

};
