const cheerio = require("cheerio")
, request 		= require("request")
, jobModel 		= require("../models/schema")

module.exports = {
	getNewListings 			 : getNewListings,
	getEmailsForListings : getEmailsForListings
}


function getNewListings(baseSofURL, base){
	request(baseSofURL, function(err, res, body){
	//err ? console.log(err) : //function
		var $ = cheerio.load(body);
		$("li.result-row > p.result-info > a.result-title")
		.each(function(i, elem){
			var job = new jobModel({
				title : $(this).text(),
				jobID : $(this).attr("data-id"),
				href  : $(this).attr("href")
			});
			getEmailsForListings(base, job);
		});
	});
}

function getEmailsForListings(base, job){
//only for software pages on CL
	request(base+"/sfo/sof/"+job.jobID+".html", function(err, res, body){
		var $ = cheerio.load(body);
		job.email = $("p.anonemail").text();
		jobModel.find({jobID : job.jobID}, function(err, ids) {
			ids.length > 0 ? console.log(job) : job.save();
		});
	});
}
