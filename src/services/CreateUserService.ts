import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";

import { AppError } from "../errors/AppError";
import { UsersRepository } from "../repositories/UsersRepository";

interface IUserRequest {
  name: string;
  email: string;
  password: string;
  isAdmin?: boolean;
}

class CreateUserService {
  async execute({
    name,
    email,
    password,
    isAdmin = false,
  }: IUserRequest): Promise<Record<string, any>> {
    const usersRepository = getCustomRepository(UsersRepository);

    if (!email) {
      throw new AppError("Email incorrect");
    }

    const userAlreadyExists = await usersRepository.findOne({ email });

    if (userAlreadyExists) {
      throw new AppError("User already exists");
    }

    const user = usersRepository.create({
      name,
      email,
      password,
      isAdmin,
    });

    await usersRepository.save(user);

    return classToPlain(user);
  }
}

export { CreateUserService };
