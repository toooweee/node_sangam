const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserController {
  login = async (req, res, next) => {};

  register = async (req, res, next) => {};

  comparePassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
  };
}

module.exports = new UserController();
