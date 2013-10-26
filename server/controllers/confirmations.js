module.exports = function(app) {

  app.get('/confirmations', function(request, response) {
    response.send('GET /confirmations');
  });

  app.post('/confirmations', function(request, response) {
    response.send('POST /confirmations');
  });

  app.get('/confirmations/:id', function(request, response) {
    response.send('GET /confirmations/'+request.params.id);
  });

  app.put('/confirmations/:id', function(request, response) {
    response.send('PUT /confirmations');
  });

  app.delete('/confirmations/:id', function(request, response) {
    response.send('DELETE /confirmations');
  });

};
