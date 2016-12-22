require("dotenv").config();

const creds = process.env.userName+":"+process.env.password;
const base = "mongodb://";
const address = "@ds141118.mlab.com:41118/swgoh";

module.exports = {
	url      : base+creds+address
}