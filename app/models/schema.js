const mongoose = require("mongoose")
, Schema = mongoose.Schema;

var jobSchema = new Schema({
	title   : String,
	jobID   : Number,
	href    : String,
	email   : String,
	phone   : Number,
	date 		: String,
	applied : Boolean
});

module.exports = mongoose.model("job", jobSchema);