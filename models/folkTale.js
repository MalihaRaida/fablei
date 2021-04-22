const mongoose = require("mongoose");

const Chapter = require("./chapter");

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
	tags: [String],
	chapters: [Chapter],
	total_chapter: {
		type: chapter,
		default: this.chapter.length,
		require: true,
	},
	completed: Boolean,
	publication_date: Date,
	updated_at: Date,
});

module.exports = mongoose.model("Folktale", folkTaleSchema);
