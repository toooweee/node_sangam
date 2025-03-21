const bcrypt = require("bcrypt");

class UserService {
  login = async (loginDto) => {};

  register = async (registerDto) => {};

  comparePassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
  };
}

module.exports = new UserService();
