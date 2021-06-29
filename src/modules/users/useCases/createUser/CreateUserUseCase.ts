import { classToClass } from "class-transformer";
import { inject, injectable } from "tsyringe";

import { ICreateUser } from "@modules/users/dtos/ICreateUser";
import { User } from "@modules/users/infra/typeorm/entities/User";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    email,
    password,
    isAdmin = false,
  }: ICreateUser): Promise<User> {
    if (!email) {
      throw new AppError("Email incorrect");
    }

    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError("User already exists");
    }

    const user = this.usersRepository.create({
      name,
      email,
      password,
      isAdmin,
    });

    return classToClass(user);
  }
}

export { CreateUserUseCase };
