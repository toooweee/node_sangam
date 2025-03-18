const Joi = require("joi");

const loginDto = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().min(5).required(),
});

module.exports = loginDto;
