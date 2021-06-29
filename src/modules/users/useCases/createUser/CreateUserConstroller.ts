import { hash } from "bcryptjs";
import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, isAdmin } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    const passwordHash = await hash(password, 8);

    const user = await createUserUseCase.execute({
      name,
      email,
      isAdmin,
      password: passwordHash,
    });

    return response.json(user);
  }
}

export { CreateUserController };
