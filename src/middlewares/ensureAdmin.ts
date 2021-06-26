import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";

import { AppError } from "../errors/AppError";
import { UsersRepository } from "../repositories/UsersRepository";

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const { id } = request.user;

  const usersRepository = getCustomRepository(UsersRepository);

  const { isAdmin } = await usersRepository.findOne(id);

  if (!isAdmin) {
    throw new AppError("Unauthorized", 401);
  }

  return next();
}
