const Joi = require("joi");

const registerDto = Joi.object({
  email: Joi.string().email().required(),
  username: Joi.string().required(),
  password: Joi.string().min(5).required(),
});

module.exports = registerDto;
