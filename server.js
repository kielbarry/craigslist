require("dotenv").config(); 

const mongoose 		= require("mongoose")
, MongoClient 		= require('mongodb').MongoClient
,	express 				= require("express")
, http 						= require("http")
, app 						= express() 
, PORT 						= process.env.PORT || 3000
, morgan 					= require("morgan")
, bodyParser 			= require("body-parser")
, request 				= require("request")
, URL 						= require("url-parser")
, cheerio 				= require("cheerio")
, db 							= require("./config/db")
, jobModel 				= require("./app/models/schema")
, mainCtrl 				=require("./app/controllers/mainController")
//query = bay area, javascript
, baseSofURL			= process.env.baseSofURL
, base 						= process.env.base;
//adding &&s=100 goes to the second page;

/**
app.use(require("./app/routes.js"));
**/

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(express.static(__dirname + "/public"));

mongoose.connect(db.url, function(err, success){
	err ? console.log(err, "mongoErr") : console.log("db connected")
	app.listen(PORT, () => {
		console.log(`You are now listening to ${PORT}, smooth jazz`);
	});
});

mainCtrl.getNewListings(baseSofURL, base);


exports = module.exports = app;