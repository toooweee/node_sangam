const userRepository = require("../models/user.js");
const createUserDto = require("../dto/createUser.dto.js");

class User {
  async getAll(req, res, next) {
    try {
      res
        .status(200)
        .json(await userRepository.find().select("email password createdAt"));
    } catch (e) {
      next(e);
    }
  }

  async create(req, res, next) {
    const { error } = createUserDto.validate(req.body);

    if (error) {
      return res.status(404).json({ message: error.details[0].message });
    }

    const { email, password, name } = req.body;

    try {
      const existingUser = await userRepository.findOne({ email });

      if (existingUser) {
        return res.status(409).json({ message: "User already exists" });
      }

      return res
        .status(201)
        .json(await userRepository.create({ email, password, name }));
    } catch (e) {
      next(e);
    }
  }

  private;
}

module.exports = new User();
