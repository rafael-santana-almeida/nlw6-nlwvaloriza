import { classToClass } from "class-transformer";
import { getCustomRepository } from "typeorm";

import { Compliment } from "../entities/Compliment";
import { ComplimentsRepository } from "../repositories/ComplimentsRrepository";

class ListUserReceiveComplimentsService {
  async execute(id: string): Promise<Compliment[]> {
    const complimentsRepository = getCustomRepository(ComplimentsRepository);

    const compliments = await complimentsRepository.find({
      where: {
        user_receiver: id,
      },
    });

    return classToClass(compliments);
  }
}

export { ListUserReceiveComplimentsService };
