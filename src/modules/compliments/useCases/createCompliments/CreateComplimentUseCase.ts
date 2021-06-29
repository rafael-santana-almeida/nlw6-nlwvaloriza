import { inject, injectable } from "tsyringe";

import { ICreateCompliment } from "@modules/compliments/dtos/ICreateCompliment";
import { Compliment } from "@modules/compliments/infra/typeorm/entities/Compliment";
import { IComplimentsRepository } from "@modules/compliments/repositories/IComplimentsRepository";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateComplimentUseCase {
  constructor(
    @inject("ComplimentsRepository")
    private complimentsRepository: IComplimentsRepository,

    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    user_sender,
    user_receiver,
    tag_id,
    message,
  }: ICreateCompliment): Promise<Compliment> {
    if (user_sender === user_receiver) {
      throw new AppError("Incorrect user receiver");
    }

    const userReceiverExists = await this.usersRepository.findById(
      user_receiver
    );

    if (!userReceiverExists) {
      throw new AppError("User receiver does not exists!");
    }

    const compliment = await this.complimentsRepository.create({
      user_sender,
      user_receiver,
      tag_id,
      message,
    });

    return compliment;
  }
}

export { CreateComplimentUseCase };
