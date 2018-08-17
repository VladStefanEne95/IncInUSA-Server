var express = require('express');
var router = express.Router();
var IncorporationDataModel = require('../models/incorporation-data.js');

router.post('/', function(req, res){

		let incorporationData = IncorporationDataModel ()
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
		res.end('{"success" : "Updated Successfully", "status" : 200}');
})


router.get('/refresh/:uuid', function(req, res){
	IncorporationDataModel.find({uuid: req.params.uuid}, function(err, incorporation){
		res.send ({incorporation: incorporation});
	})
})

module.exports = router;