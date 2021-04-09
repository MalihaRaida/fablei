//declaring router
const router = require("express").Router();

const bcrypt = require("bcrypt");

//importing models
const User = require("../models/user");

//validation
const { registerValidation } = require("../validation");

router.post("/register", async (req, res) => {
	const { error } = registerValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const userExist = await User.findOne({ email: req.body.email });
	if (userExist) return res.status(400).send("The Email already exists");

	const salt = await bcrypt.genSalt(10);
	const hashedPass = await bcrypt.hash(req.body.password, salt);

	const user = new User({
		username: req.body.username,
		email: req.body.email,
		password: hashedPass,
		admin: req.body.admin,
	});
	try {
		const savedUser = await user.save();
		res.status(200).send(savedUser);
	} catch (error) {
		res.status(400).send(error);
	}
});

module.exports = router;
