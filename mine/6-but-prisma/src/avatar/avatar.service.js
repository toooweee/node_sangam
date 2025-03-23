import prisma from "../config/prisma.js";

class AvatarService {
  findAll = async () => {
    return prisma.avatar.findMany();
  };
}

export default new AvatarService();
