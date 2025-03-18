const authValidator = require("../validationScemas/authValidation.js");

const validateLogin = (req, res, next) => {
  const { error } = authValidator.loginValidate.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

const validateRegister = (req, res, next) => {
  const { error } = authValidator.registerValidate.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

module.exports = {
  validateLogin,
  validateRegister,
};
