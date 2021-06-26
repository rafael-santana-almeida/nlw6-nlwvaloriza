import { hash } from "bcryptjs";
import { Request, Response } from "express";

import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, isAdmin } = request.body;

    const createUserService = new CreateUserService();

    const passwordHash = await hash(password, 8);

    const user = await createUserService.execute({
      name,
      email,
      isAdmin,
      password: passwordHash,
    });

    return response.json(user);
  }
}

export { CreateUserController };
