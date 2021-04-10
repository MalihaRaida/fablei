const Joi = require("joi");

const registerValidation = (data) => {
	const schema = Joi.object({
		username: Joi.string().min(6).required(),
		email: Joi.string().min(6).required().email(),
		admin: Joi.boolean().required(),
		password: Joi.string().min(6).required(),
	});

	return schema.validate(data);
};

const loginValidation = (data) => {
	const schema = Joi.object({
		username: Joi.string().min(6),
		email: Joi.string().min(6).email(),
		password: Joi.string().min(6).required(),
	}).or("username", "email");

	return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
