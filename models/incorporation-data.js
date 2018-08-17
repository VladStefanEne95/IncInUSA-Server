
var mongoose = require('mongoose');

var IncorporationDataSchema = new mongoose.Schema({
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
	companyName: {
		type: String,
        required: true
	},
	companyType: {
		type: String,
        required: true
	},
	postal: {
		type: Number,
        required: true
	},
	country: {
		type: String,
        required: true
	} ,
	state: {
		type: String,
        required: false
	},
	status: {
		type: String,
        required: true
	},
	directors: {
		type: String,
        required: true
	}
}, { timestamps: true });

mongoose.model('IncorporationData', IncorporationDataSchema);
module.exports = mongoose.model('IncorporationData');