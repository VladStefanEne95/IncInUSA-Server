var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var IncorporationDataModel = require('../models/incorporation-data.js');
var mkdirp = require('mkdirp');


router.post('/', function(req, res, next) {
	var outDir = path.join("./", "uploads", req.headers['uuid']);
	fs.readdir(outDir, (err, files) => {
		if (err) throw err;
		for (const file of files) {
		  fs.unlink(path.join(outDir, file), err => {
			if (err) throw err;
		  });
		}
		let fileName = req.headers["file-name"];		
		let out = path.join(outDir, "upload-" + new Date().getTime() + "-" + fileName);
		mkdirp(outDir, function(err) { 
		req.pipe(fs.createWriteStream(out, { flags: 'w', encoding: null, fd: null, mode: 0666 }));
			req.on('end', function () {
			setTimeout(function() {
				let body = "Upload complete!";
				res.writeHead(200, "Done!", { "Content-Type": "text/plain", "Content-Length": body.length });
				res.write(body);
				res.end();
			}, 1000);
			});
		});
	  });
})


module.exports = router;