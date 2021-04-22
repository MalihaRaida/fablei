const mongoose = require("mongoose");

const ChapterSchema = new mongoose.Schema({
	chapterTitle: String,
	chapterDetails: String,
	word_count: Number,
	like_count: Number,
	comment_count: Number,
});

module.exports = mongoose.model("Chapter", ChapterSchema);
