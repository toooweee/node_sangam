import avatarService from "./avatar.service.js";

class AvatarController {
  getAvatars = async (req, res, next) => {
    try {
      const avatars = await avatarService.findAll();
      return res.status(200).json(avatars);
    } catch (e) {
      next(e);
    }
  };

  uploadAvatar = (req, res, next) => {
    try {
      console.log(req.file);
      const avatar = avatarService.create(req.file);
      return res.status(201).json(avatar);
    } catch (e) {
      next(e);
    }
  };
}

export default new AvatarController();
