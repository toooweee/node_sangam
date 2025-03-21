import userService from "../services/user.service.js";

class UserController {
  registerUser = async (req, res) => {
    try {
      const avatar = req.file;
      const user = await userService.registerUser(req.body, avatar);
      res.status(201).json(user);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  };

  getUserProfile = async (req, res) => {
    try {
      const user = await userService.getUserProfile(req.params.id);
      res.json(user);
    } catch (err) {
      res
        .status(err.message === "Пользователь не найден" ? 404 : 500)
        .json({ message: err.message });
    }
  };
}

export default new UserController();
