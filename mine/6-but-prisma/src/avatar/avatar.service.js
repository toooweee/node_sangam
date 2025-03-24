import prisma from "../config/prisma.js";

class AvatarService {
  findAll = async () => {
    return prisma.avatar.findMany();
  };

  create = async (file) => {
    const normalizedPath = `uploads/avatars/${file.filename}`;
    return prisma.avatar.create({
      data: {
        path: normalizedPath,
      },
    });
  };
}

export default new AvatarService();
