var mongoose = require('mongoose')

var LocationType = mongoose.Schema({
	longitude: Number,
	latitude: Number
});

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
	location: [LocationType],
	bikeId: mongoose.Schema.ObjectId
});

var RequestSchema = mongoose.Schema({
	location: [LocationType],
	hours: Number,
	madeAt: Date,
	madeBy: mongoose.Schema.ObjectId
});

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