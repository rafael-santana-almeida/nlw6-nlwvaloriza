import { classToClass } from "class-transformer";
import { getCustomRepository } from "typeorm";

import { Compliment } from "../entities/Compliment";
import { ComplimentsRepository } from "../repositories/ComplimentsRrepository";

class ListUserSendComplimentsService {
  async execute(id: string): Promise<Compliment[]> {
    const complimentsRepository = getCustomRepository(ComplimentsRepository);

    const compliments = await complimentsRepository.find({
      where: {
        user_sender: id,
      },
      relations: ["userSender", "userReceiver", "tag"],
    });

    return classToClass(compliments);
  }
}

export { ListUserSendComplimentsService };
