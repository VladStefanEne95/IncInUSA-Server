
var mongoose = require('mongoose');

var IncorporationStatusSchema = new mongoose.Schema({
    uuid: {
		type: String,
        required: true
	},
	submitedDate: {
		type: Date,
		default: Date.now,
        required: true
	},
	reviewedDate: {
		type: Date,
		default: Date.now,
        required: true
	},
	payedDate: {
		type: Date,
		default: Date.now,
        required: true
	},
	submited: {
		type: Boolean,
        required: true
	},
	reviewed: {
		type: Boolean,
        required: true
	},
	payed: {
		type: Boolean,
        required: true
	},
});

mongoose.model('IncorporationStatus', IncorporationStatusSchema);
module.exports = mongoose.model('IncorporationStatus');