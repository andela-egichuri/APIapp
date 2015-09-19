var mongoose = require('mongoose');

//create schema
var contactSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	phone: Number,
	dob: Date
});

//User model
mongoose.model("Contact", contactSchema);