const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema({
	userId: {
		type: String,
		required: true,
	},
	fullname: {
		type: String,
		require: false,
		min: 6,
	},
	nationality: { type: String, require: false },
	birthday: { type: Date, require: false },
	occupation: {
		type: String,
		require: false,
	},
	organization: String,
});

module.exports = mongoose.model("UserProfile", userProfileSchema);
