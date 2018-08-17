var express = require('express');
var router = express.Router();
var IncorporationDataModel = require('../models/incorporation-data.js');


router.get('/', function(req, res) {
	console.log("aici");
	IncorporationDataModel.find({}, function(err, incorporations){
		if(err) console.log(err);

		res.render('pages/incorporation-list', {incorporations: incorporations});
	})
})

router.get('/:uuid', function(req, res) {
	IncorporationDataModel.find({uuid: req.params.uuid}, function(err, incorporation){
		res.render('pages/update-status', {incorporation: incorporation});
	})
})



router.post('/:uuid', function(req, res) {
	IncorporationDataModel.findOneAndUpdate({uuid: req.params.uuid}, {$set: {
		status: req.body.status,
		$currentDate: {
			createtime: true
		  }
	}}, function(err, result){
		if (err) 
			console.log(err);
		else
			res.end('{"success" : "Updated Successfully", "status" : 200}');
	})
})

module.exports = router;