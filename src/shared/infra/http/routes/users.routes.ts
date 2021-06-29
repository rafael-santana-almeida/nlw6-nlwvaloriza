import { Router } from "express";

import { CreateUserController } from "@modules/users/useCases/createUser/CreateUserConstroller";
import { ListUsersController } from "@modules/users/useCases/listUsers/ListUsersController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const usersRoutes = Router();

const createUserController = new CreateUserController();

const listUsersController = new ListUsersController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/", ensureAuthenticated, listUsersController.handle);

export { usersRoutes };
