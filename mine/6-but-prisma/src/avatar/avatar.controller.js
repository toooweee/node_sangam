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
}

export default new AvatarController();
