const userRepository = require("../models/user.model.js");
const createUserDto = require("../dto/user/createUser.dto.js");

class User {
  async getAll(req, res, next) {
    try {
      const users = await userRepository
        .find()
        .select("email name createdAt updatedAt");
      return res.status(200).json(users);
    } catch (e) {
      next(e);
    }
  }

  async create(req, res, next) {
    const { error } = createUserDto.validate(req.body);

    if (error) {
      res.status(400).json({ message: error.details[0].message });
    }

    const { email, password, name } = req.body;

    try {
      const existingUser = await userRepository.findOne({ email });

      if (existingUser) {
        return res.status(409).json({ message: "User already exists" });
      }

      const createdUser = await userRepository.create({
        email,
        password,
        name,
      });

      return res.status(200).json(createdUser);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new User();
