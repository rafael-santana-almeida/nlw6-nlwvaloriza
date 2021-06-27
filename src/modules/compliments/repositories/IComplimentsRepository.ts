import { ICreateCompliment } from "../dtos/ICreateCompliment";
import { Compliment } from "../infra/typeorm/entities/Compliment";

interface IComplimentsRepository {
  create(data: ICreateCompliment): Promise<Compliment>;
  listReceiveCompliments(user_receiver: string): Promise<Compliment[]>;
  listSendCompliments(user_sender: string): Promise<Compliment[]>;
}

export { IComplimentsRepository };
