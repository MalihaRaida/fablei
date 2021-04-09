//declaring router
const router = require("express").Router();

//importing models
const User = require("../models/user");

const Joi = require("joi");

const schema = Joi.object({
	name: Joi.string().min(6).required(),
	email: Joi.string().min(6).required().email(),
	admin: Joi.boolean().required(),
	password: Joi.string().min(6).required(),
});

router.post("/", (req, res) => {
	const { error } = schema.validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);
	res.status(200).send();
});

module.exports = router;
