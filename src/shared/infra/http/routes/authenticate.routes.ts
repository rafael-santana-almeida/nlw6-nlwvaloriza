import { Router } from "express";

import { AuthenticateUserController } from "@modules/users/useCases/authenticateUserUseCase/AuthenticateUserController";

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authenticateRoutes.post("/login", authenticateUserController.handle);

export { authenticateRoutes };
