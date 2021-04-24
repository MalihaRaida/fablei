const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema({
	user_id: {
		type: Schema.Types.ObjectId,
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
	profile_image: Buffer,
});

module.exports = mongoose.model("UserProfile", userProfileSchema);
