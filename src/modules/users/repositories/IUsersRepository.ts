import { ICreateUser } from "../dtos/ICreateUser";
import { User } from "../infra/typeorm/entities/User";

interface IUsersRepository {
  create(data: ICreateUser): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  list(): Promise<User[]>;
}

export { IUsersRepository };
