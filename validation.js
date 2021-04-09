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

const LoginValidation = (data) => {
	const schema = Joi.object({
		username: Joi.string().min(6).required(),
		email: Joi.string().min(6).required().email(),
		password: Joi.string().min(6).required(),
	}).or("username", "email");

	return schema.validate(data);
};

module.exports = registerValidation;
module.exports = LoginValidation;
