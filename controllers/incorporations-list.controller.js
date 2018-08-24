var express = require('express');
var router = express.Router();
var IncorporationDataModel = require('../models/incorporation-data.js');
var IncorporationStatusModel = require('../models/incorporation-status.js');
var IncorporationBillingModel = require('../models/incorporation-billing.js');


router.get('/', function(req, res) {
	IncorporationDataModel.find({}, function(err, incorporations){
		if(err) console.log(err);

		res.render('pages/incorporation-list', {incorporations: incorporations});
	})
}) 

router.get('/billing/:uuid', function(req, res) {
	IncorporationBillingModel.findOne({uuid: req.params.uuid}, function(err, information) {
		console.log(information);
		res.render('pages/view-billing', {information: information});
	})
})

router.get('/:uuid', function(req, res) {
	IncorporationDataModel.findOne({uuid: req.params.uuid}, function(err, incorporation) {
		IncorporationStatusModel.findOne({uuid: req.params.uuid}, function(err, status) {
			res.render('pages/update-status', {incorporation: incorporation, status: status});
		})
	})
})



router.post('/:uuid', function(req, res) {
	if (req.body.status == 'true')
		IncorporationDataModel.findOneAndUpdate({uuid: req.params.uuid}, {$set: {
			status: req.body.typeValue,
			$currentDate: {
				createtime: true
			}
		}}, function(err, result){
			if (err) 
				console.log(err);
		})
	let updateTime = req.body.type + "Date";
	IncorporationStatusModel.findOneAndUpdate({uuid: req.params.uuid}, {$set: {
		[req.body.type]: (req.body.status == 'true'),
		[updateTime]: Date.now()
	}}, function(err, result){
		console.log(result);
		if (err) 
			console.log(err);
	})

	res.end('{"success" : "Updated Successfully", "status" : 200}');
})

module.exports = router;