import { classToClass } from "class-transformer";
import { inject, injectable } from "tsyringe";

import { Compliment } from "@modules/compliments/infra/typeorm/entities/Compliment";
import { IComplimentsRepository } from "@modules/compliments/repositories/IComplimentsRepository";

@injectable()
class ListReceiveComplimentsUseCase {
  constructor(
    @inject("ComplimentsRepository")
    private complimentsRepository: IComplimentsRepository
  ) {}

  async execute(user_receiver: string): Promise<Compliment[]> {
    const compliments = await this.complimentsRepository.listReceiveCompliments(
      user_receiver
    );

    return classToClass(compliments);
  }
}

export { ListReceiveComplimentsUseCase };
