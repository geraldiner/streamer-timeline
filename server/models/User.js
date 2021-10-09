const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	twitchId: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("User", UserSchema);
