const registerDto = require("../dto/register.dto.js");
const loginDto = require("../dto/login.dto.js");

function validateRegister(req, res, next) {
  const { error } = registerDto.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
}

function validateLogin(req, res, next) {
  const { error } = loginDto.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
}

module.exports = {
  validateRegister,
  validateLogin,
};
