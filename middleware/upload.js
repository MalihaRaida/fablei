const multer = require("multer");
const storage = multer.memoryStorage();

const upload = multer({
	storage: storage,
	fileFilter: (req, file, callback) => {
		if (
			file.mimetype == "image/jpeg" ||
			file.mimetype == "image/jpg" ||
			file.mimetype == "image/png"
		) {
			callback(null, true);
		} else {
			console.log(
				"only jpg and png allowed but ",
				file.mimetype,
				" was given"
			);
			callback(null, false);
		}
	},
	limits: { fieldSize: 1024 * 1024 * 10 },
});

module.exports = upload;
