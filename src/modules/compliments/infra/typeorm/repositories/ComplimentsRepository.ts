import { getRepository, Repository } from "typeorm";

import { ICreateCompliment } from "@modules/compliments/dtos/ICreateCompliment";
import { IComplimentsRepository } from "@modules/compliments/repositories/IComplimentsRepository";

import { Compliment } from "../entities/Compliment";

class ComplimentsRepository implements IComplimentsRepository {
  private repository: Repository<Compliment>;

  constructor() {
    this.repository = getRepository(Compliment);
  }

  async create({
    message,
    tag_id,
    user_receiver,
    user_sender,
  }: ICreateCompliment): Promise<Compliment> {
    const compliment = this.repository.create({
      message,
      tag_id,
      user_receiver,
      user_sender,
    });

    await this.repository.save(compliment);

    return compliment;
  }

  async listReceiveCompliments(user_receiver: string): Promise<Compliment[]> {
    const compliments = await this.repository.find({ user_receiver });

    return compliments;
  }

  async listSendCompliments(user_sender: string): Promise<Compliment[]> {
    const compliments = await this.repository.find({ user_sender });

    return compliments;
  }
}

export { ComplimentsRepository };
