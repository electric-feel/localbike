var mongoose = require('mongoose')

var UserSchema = mongoose.Schema({
	email: String,
	passwd: String
});

var BikeSchema = mongoose.Schema({
	description: String,
	photo: String,
	code: String,
	userId: mongoose.Schema.ObjectId
});

var LocationSchema = mongoose.Schema({
  location: {type: [Number], index: '2d'},
	bikeId: mongoose.Schema.ObjectId
});

var RequestSchema = mongoose.Schema({
  location: {type: [Number], index: '2d'},
	hours: Number,
	madeAt: Date,
	madeBy: mongoose.Schema.ObjectId
});

RequestSchema.methods.findNearBikes = function(){
  mongoose.model('LocationSchema', LocationSchema)
    .find({location: { $nearSphere: this.location, $maxDistance: 0.01}}, function(err, locations){
      
      return locations;
      /*console.log(locations);
      locations.map(
        function(loc){
          return mongoose.model('BikeSchema', BikeSchema).findById(loc.bikeId);
        }); */
    }) 
};

var ConfirmationSchema = mongoose.Schema({
	sentTo: mongoose.Schema.ObjectId,
	confirmedAt: Number,
	declinedAt: Number,
	acceptedAt: Number,
	requestId: mongoose.Schema.ObjectId,
	bikeId: mongoose.Schema.ObjectId,
	locationId: mongoose.Schema.ObjectId
});

var RentalSchema = mongoose.Schema({
	returnedAt: Number,
	receivedAt: Number,
	confirmationId: mongoose.Schema.ObjectId
});

module.exports = {
  UserSchema: UserSchema,
  BikeSchema: BikeSchema,
  LocationSchema: LocationSchema,
  RequestSchema: RequestSchema,
  ConfirmationSchema: ConfirmationSchema,
  RentalSchema: RequestSchema
}