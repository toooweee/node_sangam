const userRepository = require("../models/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class AuthController {
  async register(req, res, next) {
    const { username, email, password } = req.body;

    try {
      const existingUser = await userRepository.findOne({
        $or: [{ username }, { email }],
      });

      if (existingUser) {
        return res.status(409).json({ message: "User already exists" });
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
  }

  async login(req, res, next) {
    const { username, password } = req.body;

    try {
      const user = await userRepository.findOne({
        username,
      });

      if (!user) {
        return res.status(400).json({ message: "Account does not exist" });
      }
      if (!this.comparePassword(password, user.password)) {
        return res.status(401).json({ message: "Invalid Password" });
      }

      const accessToken = jwt.sign(
        {
          userId: user._id,
          username: user.username,
          role: user.role,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: process.env.JWT_EXPIRES,
        },
      );

      return res.status(201).json({ accessToken: `Bearer: ${accessToken}` });
    } catch (e) {
      next(e);
    }
  }

  comparePassword(password, hashedPassword) {
    return bcrypt.compare(password, hashedPassword);
  }
}

module.exports = new AuthController();
