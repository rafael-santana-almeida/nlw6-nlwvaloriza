import { getCustomRepository } from "typeorm";

import { Compliment } from "../entities/Compliment";
import { AppError } from "../errors/AppError";
import { ComplimentsRepository } from "../repositories/ComplimentsRrepository";
import { UsersRepository } from "../repositories/UsersRepository";

interface ICompliment {
  user_sender: string;
  user_receiver: string;
  tag_id: string;
  message: string;
}

class CreateComplimentService {
  async execute({
    user_sender,
    user_receiver,
    tag_id,
    message,
  }: ICompliment): Promise<Compliment> {
    const complimentsRepository = getCustomRepository(ComplimentsRepository);
    const usersRepository = getCustomRepository(UsersRepository);

    if (user_sender === user_receiver) {
      throw new AppError("Incorrect user receiver");
    }

    const userReceiverExists = await usersRepository.findOne(user_receiver);

    if (!userReceiverExists) {
      throw new AppError("User receiver does not exists!");
    }

    const compliment = complimentsRepository.create({
      user_sender,
      user_receiver,
      tag_id,
      message,
    });

    await complimentsRepository.save(compliment);

    return compliment;
  }
}

export { CreateComplimentService };
