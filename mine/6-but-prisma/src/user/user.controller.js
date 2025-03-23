import userService from "./user.service.js";

class UserController {
  createUser = async (req, res, next) => {
    try {
      const createData = req.body;
      const user = await userService.create(createData);
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
      const idOrEmail = req.params.idOrEmail;
      const user = await userService.findOne(idOrEmail);
      return res.status(200).json(user);
    } catch (e) {
      next(e);
    }
  };
}

export default new UserController();
