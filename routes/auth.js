//declaring router
const router = require("express").Router();

const bcrypt = require("bcrypt");

//importing models
const User = require("../models/user");

//validation
const { registerValidation, loginValidation } = require("../validation");

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

router.post("/login", async (req, res) => {
	const { error } = loginValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);
	const user = await User.findOne({
		$or: [{ email: req.body.email }, { username: req.body.username }],
	});
	if (!user) return res.status(400).send("Email does not match");
	const validPass = await bcrypt.compare(req.body.password, user.password);
	if (!validPass) return res.status(400).send("Invalid Password");

	res.status(200).send("Logged In");
});

module.exports = router;
