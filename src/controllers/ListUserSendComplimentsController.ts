import { Request, Response } from "express";

import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";

class ListUserSendComplimentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listUserSendService = new ListUserSendComplimentsService();

    const compliments = await listUserSendService.execute(id);

    return response.json(compliments);
  }
}

export { ListUserSendComplimentsController };
