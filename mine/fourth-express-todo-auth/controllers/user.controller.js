const userRepository = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class User {
  register = async (req, res, next) => {
    const { username, email, password } = req.body;
    try {
      const existingUser = await userRepository.findOne({
        $or: [{ username }, { email }],
      });

      if (existingUser) {
        return res.status(409).json({
          message: "User with this credentials already exists!",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await userRepository.create({
        username,
        email,
        password: hashedPassword,
      });

      return res.status(201).json(user);
    } catch (e) {
      next(e);
    }
  };

  login = async (req, res, next) => {
    const { username, password } = req.body;

    try {
      const user = await userRepository.findOne({ username });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      if (!(await this.comparePassword(password, user.password))) {
        return res.status(403).json({ message: "Invalid credentials" });
      }

      const accessToken = jwt.sign(
        {
          id: user._id,
          username: user.username,
          role: user.role,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: process.env.JWT_EXPIRES,
        },
      );

      return res.status(200).json({ accessToken: `Bearer ${accessToken}` });
    } catch (e) {
      next(e);
    }
  };

  comparePassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
  };
}

module.exports = new User();
