var mongoose = require('mongoose')
var schemas = require('./schemas.js')

var Location = mongoose.model('Location', schemas.LocationSchema);
var Bike = mongoose.model('Bike', schemas.BikeSchema);
var User = mongoose.model('User', schemas.UserSchema);
var Confirmation = mongoose.model('Confirmation', schemas.ConfirmationSchema);
var Rental = mongoose.model('Rental', schemas.RentalSchema);
var Request = mongoose.model('Request', schemas.RequestSchema);

module.exports = {
  Location: Location,
  Bike: Bike,
  User: User,
  Confirmation: Confirmation,
  Rental: Rental,
  Request: Request
}