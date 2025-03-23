import avatarRepository from "../models/avatar.js";

class AvatarService {
  findAll = async () => {
    return avatarRepository.find();
  };
}

export default new AvatarService();
