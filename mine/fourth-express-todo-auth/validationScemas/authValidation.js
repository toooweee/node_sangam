const Joi = require("joi");

const loginValidate = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

const registerValidate = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

module.exports = {
  loginValidate,
  registerValidate,
};
