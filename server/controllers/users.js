var User = require("../data/models.js").User;

module.exports = function(app) {

  app.get('/users', function(req, res) {
    return User.find({}, function (err, users) {
      if (!err) {
        return res.send(users);
      } else {
        return console.log(err);
      }
    });
  });

  app.post('/users', function(req, res) {
    var user = new User({
      email: req.body.email,
      passwd: req.body.passwd,
    });
    user.save(function (err) {
      if (!err) {
        return console.log("created");
      } else {
        return console.log(err);
      }
    });
    return res.send(user);
  });

  app.get('/users/:id', function(req, res) {
    return User.findById(req.params.id, function (err, user) {
      if (!err) {
        return res.send(user);
      } else {
        return console.log(err);
      }
    });
  });

};
