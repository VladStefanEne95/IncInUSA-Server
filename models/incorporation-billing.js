
var mongoose = require('mongoose');

var IncorporationBillingSchema = new mongoose.Schema({
    uuid: {
        type: String,
        required: true
	},
	firstName: {
		type: String,
        required: true
	},
	lastName: {
		type: String,
        required: true
	},
	email: {
		type: String,
        required: true
	},
	al1: {
		type: String,
        required: true
	},
	al2: {
		type: String,
        required: false
	},
	city: {
		type: String,
        required: true
	},
	postal: {
		type: String,
        required: true
	},
	country: {
		type: String,
        required: true
	} ,
	emoji: {
		type: String,
        required: true
	}
});

mongoose.model('IncorporationBilling', IncorporationBillingSchema);
module.exports = mongoose.model('IncorporationBilling');