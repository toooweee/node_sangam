import bcrypt from "bcrypt";
import {ErrorHandler} from "../helpers/error.js";
import userService from "../services/user.service.js"

class AuthService {
  login = async (loginDto) => {
    const { usesrname, password } = loginDto;

    const user = await

    if(!this.comparePassword(password)) {
      throw new ErrorHandler(401, "Invalid Credentials");
    }
  }

  comparePassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
  }
}

export default new AuthService()