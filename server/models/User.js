const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	twitchId: {
		type: String,
		required: true,
	},
	loginName: {
		type: String,
		required: true,
	},
	displayName: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
	profileImg: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("User", UserSchema);
