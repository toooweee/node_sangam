import avatarService from "../services/avatar.service.js";

class AvatarController {
  getAvatars = async (req, res, next) => {
    try {
      const avatars = await avatarService.findAll();
      res.status(200).json(avatars);
    } catch (e) {
      next(e);
    }
  };
}

export default new AvatarController();
