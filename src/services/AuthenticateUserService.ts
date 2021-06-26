import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";

import { AppError } from "../errors/AppError";
import { UsersRepository } from "../repositories/UsersRepository";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest): Promise<string> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne({ email });

    if (!user) {
      throw new AppError("Email/Password incorret");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email/password incorrect");
    }

    const token = sign(
      { email: user.email },
      "f32bfa8de334a87442f252da41edc1c2",
      {
        subject: user.id,
        expiresIn: "15m",
      }
    );

    return token;
  }
}

export { AuthenticateUserService };
