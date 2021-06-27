import { classToClass } from "class-transformer";
import { inject, injectable } from "tsyringe";

import { Compliment } from "@modules/compliments/infra/typeorm/entities/Compliment";
import { IComplimentsRepository } from "@modules/compliments/repositories/IComplimentsRepository";

@injectable()
class ListSendComplimentsUseCase {
  constructor(
    @inject("ComplimentsRepository")
    private complimentsRepository: IComplimentsRepository
  ) {}

  async execute(user_sender: string): Promise<Compliment[]> {
    const compliments = await this.complimentsRepository.listSendCompliments(
      user_sender
    );

    return classToClass(compliments);
  }
}

export { ListSendComplimentsUseCase };
