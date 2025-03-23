import prisma from "../config/prisma.js";
import { ErrorHandler } from "../helpers/error.js";

class UserService {
  create = async (createUserDto) => {
    const existingUser = await prisma.user.findUnique({
      where: { email: createUserDto.email },
    });

    if (existingUser) {
      throw new ErrorHandler(409, `User already exists`);
    }

    const isAvatarValid = await prisma.avatar.findUnique({
      where: { id: createUserDto.avatarId },
    });

    if (!isAvatarValid) {
      throw new ErrorHandler(404, `Selected avatar not found`);
    }

    return prisma.user.create({
      data: createUserDto,
    });
  };

  findAll = async () => {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        role: true,
        avatar: {
          select: {
            path: true,
          },
        },
      },
    });

    return users.map((user) => ({
      ...user,
      avatarPath: user.avatar?.path || null,
      avatar: undefined,
    }));
  };

  findOne = async (idOrEmail) => {
    const user = await prisma.user.findFirst({
      where: { OR: [{ id: idOrEmail }, { email: idOrEmail }] },
    });

    if (!user) {
      throw new ErrorHandler(404, "User not found");
    }

    return user;
  };
}

export default new UserService();
