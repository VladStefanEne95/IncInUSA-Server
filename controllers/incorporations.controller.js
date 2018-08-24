var express = require('express');
var router = express.Router();
var IncorporationDataModel = require('../models/incorporation-data.js');
var IncorporationStatusModel = require('../models/incorporation-status.js');
var IncorporationBillingModel = require('../models/incorporation-billing.js');
let path = require('path');
let fs = require('fs');

router.post('/', function(req, res){

		console.log(req.body.uuid);
		IncorporationDataModel.findOneAndUpdate({uuid: req.body.uuid },{
			$set:{
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				email: req.body.email, 
				al1: req.body.al1, 
				al2: req.body.al2,  
				city: req.body.city, 
				postal: req.body.postal, 
				country: req.body.country, 
				state: req.body.state, 
				emoji: req.body.emoji,
				uuid: req.body.uuid,
				status: 'Application Submitted',
				directors: req.body.directors,
				companyName: req.body.companyName,
				companyType: req.body.companyType,
				$currentDate: {
					createtime: true
				  } 
			}
		}, {upsert: true}, function (err, result) {
				if(err) console.log(err);
		});

		let incorporationStatus = IncorporationStatusModel ({
			uuid: req.body.uuid,
			sumbitedDate: Date.now(),
			reviewedDate: Date.now(),
			payedDate: Date.now(),
			submited: true,
			reviewed: false,
			payed: false
		})
		incorporationStatus.save();
		let pathToBeReplaced = path.join("./", "uploads", req.body.uuid);
		let newPath = path.join("./", "uploads", req.body.companyName + req.body.companyType);
		fs.rename(pathToBeReplaced, newPath, function (err) {
			if (err) throw err;
			console.log('renamed complete');
		  });
		res.end('{"success" : "Updated Successfully", "status" : 200}');
})

router.post('/billing', function(req, res){
	IncorporationBillingModel.findOneAndUpdate({uuid: req.body.uuid },{
		$set:{
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email, 
			al1: req.body.al1, 
			al2: req.body.al2,  
			city: req.body.city,  
			postal: req.body.postal, 
			country: req.body.country,  
			emoji: req.body.emoji,
			uuid: req.body.uuid,
		}
	}, {upsert: true}, function (err, result) {
			if(err) console.log(err);
	});
	res.end('{"success" : "Updated Successfully", "status" : 200}');
})


router.get('/refresh/:uuid', function(req, res){
	IncorporationDataModel.findOne({uuid: req.params.uuid}, function(err, incorporation) {
		IncorporationStatusModel.findOne({uuid: req.params.uuid}, function(err, status) {
			res.send ({incorporation: incorporation, status: status});
		})
	})
})

module.exports = router;