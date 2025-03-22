import userRepository from "../models/user.js";
import { ErrorHandler } from "../helpers/error.js";
import bcrypt from "bcrypt";

class UserService {
  create = async (createUserDto) => {
    const existingUser = await userRepository.findOne({
      $or: [
        { email: createUserDto.email },
        { username: createUserDto.username },
      ],
    });

    if (existingUser) {
      throw new ErrorHandler(409, "User already exists");
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    return userRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });
  };

  findAll = async () => {
    return await userRepository.find().populate("avatar");
  };
}

export default new UserService();
