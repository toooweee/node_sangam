import userService from "../services/user.service.js";

class UserController {
  createUser = async (req, res, next) => {
    try {
      const user = await userService.create(req.body, req.file);
      return res.status(201).json(user);
    } catch (e) {
      next(e);
    }
  };

  getUsers = async (req, res, next) => {
    try {
      const users = await userService.findAll();
      return res.status(200).json(users);
    } catch (e) {
      next(e);
    }
  };

  getUser = async (req, res, next) => {
    try {
      console.log(req.params.idOrEmail);
      const user = await userService.findOne(req.params.idOrEmail);
      return res.status(200).json(user);
    } catch (e) {
      next(e);
    }
  };
}

export default new UserController();
