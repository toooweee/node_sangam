import Joi from "joi";

const createUserDto = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  role: Joi.string(),
  avatar: Joi.string().required(),
});

export default createUserDto;
