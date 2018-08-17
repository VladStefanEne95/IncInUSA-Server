var express = require('express');
var router = express.Router();
var IncorporationDataModel = require('../models/incorporation-data.js');
var stripe = require("stripe")("sk_test_vKr7IMkSJfHQMzVJysalzllt");

router.post('/', function(req, res) {
	let sum = 999;
	let currency = 'usd';
	let description = 'Example';
	console.log(req.body);
	const token = request.body.stripeToken;
	
	const charge = stripe.charges.create({
	  amount: sum,
	  currency: currency,
	  description: description,
	  source: token,
	}, function(err, charge){
		if (err) 
			return res.status(400).send({
				message: "There was an error processing"
			});
	});
})


module.exports = router;