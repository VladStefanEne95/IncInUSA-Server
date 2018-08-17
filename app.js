const fs = require('fs');
const path = require('path');

const express = require('express');


const app = express();


const isValidPath = require('is-valid-path');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');



var cookieParser = require('cookie-parser');
var session = require('express-session');

var incorporationController = require('./controllers/incorporations.controller');
var paymentController = require('./controllers/payment.controller');
var incorporationListController = require('./controllers/incorporations-list.controller');
let uploadController = require('./controllers/upload.controller');

var rimraf = require('rimraf');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/incinusa');

var MongoClient = require('mongodb').MongoClient;
var mkdirp = require('mkdirp');
let dirname = path.dirname;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("open");
});


app.set('view engine', 'ejs');

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });
app.use(bodyParser.json());

app.use(cookieParser());

app.use('/', express.static('public'))



app.use(fileUpload());



app.use('/incorporation-data', incorporationController);

app.use('/payment', paymentController);

app.use('/list', bodyParser.urlencoded({extended : true}), incorporationListController);

app.use('/upload', uploadController);

 

app.listen(3000, () => console.log('App listening on port 3000!'));

