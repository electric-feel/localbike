var mongoose = require('mongoose')

var locationSchema = mongoose.Schema({
	longitude: Number,
	latitude: Number,
})

var bikeSchema = mongoose.Schema({
	description: String,
	photo: String,
	code: String,
	Location : locationSchema,
})

var userSchema = mongoose.Schema({
	email: String,
	passwd: String,
	bikes: [bikeSchema],
})


var confirmationSchema = mongoose.Schema({
	confirmedAt: Number,
	declinedAt: Number,
	acceptedAt: Number,
	request: requestSchema,
	bike: bikeSchema
})

var rentalSchema = mongoose.Schema({
	confirmation: confirmationSchema,
	returnedAt: Number,
	receivedAt: Number,
})

var requestSchema = mongoose.Schema({
	location: locationSchema,lo
	hours: Float,
	made_at: Number,
	confirmations: [confirmationSchema],
 })