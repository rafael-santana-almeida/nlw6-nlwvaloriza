import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateComplimentUseCase } from "./CreateComplimentUseCase";

class CreateComplimentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: user_sender } = request.user;
    const { user_receiver, tag_id, message } = request.body;

    const createComplimentUseCase = container.resolve(CreateComplimentUseCase);

    const compiment = await createComplimentUseCase.execute({
      user_sender,
      user_receiver,
      tag_id,
      message,
    });

    return response.json(compiment);
  }
}

export { CreateComplimentController };
