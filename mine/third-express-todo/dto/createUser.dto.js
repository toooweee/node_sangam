const Joi = require("joi");

const createUserDto = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(5).required(),
  name: Joi.string().min(2),
});

module.exports = createUserDto;
