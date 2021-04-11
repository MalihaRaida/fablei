const mongoose = require("mongoose");

const folkTaleSchema = new mongoose.Schema({
	storyTitle: { type: String, require: true },
	storyDes: { type: String, require: true },
	author: {
		fullname: {
			type: String,
			require: false,
			min: 6,
		},
		nationality: { type: String, require: false },
		birthday: { type: Date, require: false },
	},
	region: { type: String, require: false },
	tag: [String],
	word_count: Number,
	total_chapter: Number,
	completed: Boolean,
	publication_time: Date,
});

module.exports = mongoose.model("Folktale", folkTaleSchema);
