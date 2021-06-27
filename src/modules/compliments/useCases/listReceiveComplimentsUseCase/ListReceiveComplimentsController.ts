import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListReceiveComplimentsUseCase } from "./ListReceiveComplimentsUseCase";

class ListReceiveComplimentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: user_receiver } = request.user;

    const listUserReceiveService = container.resolve(
      ListReceiveComplimentsUseCase
    );

    const compliments = await listUserReceiveService.execute(user_receiver);

    return response.json(compliments);
  }
}

export { ListReceiveComplimentsController };
