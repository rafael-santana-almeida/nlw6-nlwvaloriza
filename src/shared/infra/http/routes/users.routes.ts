import { Router } from "express";

import { CreateUserController } from "@modules/users/useCases/createUserUseCase/CreateUserConstroller";
import { ListUsersController } from "@modules/users/useCases/listUsersUseCase/ListUsersController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const usersRoutes = Router();

const createUserController = new CreateUserController();

const listUsersController = new ListUsersController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/", ensureAuthenticated, listUsersController.handle);

export { usersRoutes };
