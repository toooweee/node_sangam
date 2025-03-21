import FileService from "./file.service.js";
import UserModel from "../models/user.model.js";

class UserService {
  async registerUser(user, file) {
    try {
      const avatarPath = file ? FileService.getFilePath(file) : null;
      const newUser = new UserModel({ ...user, avatar: avatarPath });
      await newUser.save();
      return newUser;
    } catch (e) {
      if (file) {
        await FileService.deleteFile(file.path);
      }
      throw e;
    }
  }

  async getUserProfile(userId) {
    const user = await UserModel.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }
}

export default new UserService();
