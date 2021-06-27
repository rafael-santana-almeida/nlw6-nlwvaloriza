import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSendComplimentsUseCase } from "./ListSendComplimentsUseCase";

class ListSendComplimentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: user_sender } = request.user;

    const listSendComplimentsUseCase = container.resolve(
      ListSendComplimentsUseCase
    );

    const compliments = await listSendComplimentsUseCase.execute(user_sender);

    return response.json(compliments);
  }
}

export { ListSendComplimentsController };
