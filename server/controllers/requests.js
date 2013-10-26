module.exports = function(app) {

  app.get('/requests', function(request, response) {
    response.send('GET /requests');
  });

  app.post('/requests', function(request, response) {
    response.send('POST /requests');
  });

  app.get('/requests/:id', function(request, response) {
    response.send('GET /requests/'+request.params.id);
  });

  app.put('/requests/:id', function(request, response) {
    response.send('PUT /requests');
  });

  app.delete('/requests/:id', function(request, response) {
    response.send('DELETE /requests');
  });

};
