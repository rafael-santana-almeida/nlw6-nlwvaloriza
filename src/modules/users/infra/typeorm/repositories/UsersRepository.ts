import { getRepository, Repository } from "typeorm";

import { ICreateUser } from "@modules/users/dtos/ICreateUser";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";

import { User } from "../entities/User";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ email, name, password, isAdmin }: ICreateUser): Promise<User> {
    const user = this.repository.create({
      email,
      name,
      password,
      isAdmin,
    });

    await this.repository.save(user);

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = this.repository.findOne({ email });

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);

    return user;
  }

  async list(): Promise<User[]> {
    const users = await this.repository.find();

    return users;
  }
}

export { UsersRepository };
