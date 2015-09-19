var mongoose = require('mongoose');

//create schema
var contactSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	phone: Number	
});

//User model
mongoose.model("Contact", contactSchema);