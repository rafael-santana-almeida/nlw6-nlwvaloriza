import { Router } from "express";

import { CreateComplimentController } from "@modules/compliments/useCases/createCompliments/CreateComplimentController";
import { ListReceiveComplimentsController } from "@modules/compliments/useCases/listReceiveCompliments/ListReceiveComplimentsController";
import { ListSendComplimentsController } from "@modules/compliments/useCases/listSendCompliments/ListSendComplimentsController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const complimentsRoutes = Router();

const createComplimentsController = new CreateComplimentController();
const listReceiveComplimentsController = new ListReceiveComplimentsController();
const listSendComplimentsController = new ListSendComplimentsController();

complimentsRoutes.use(ensureAuthenticated);

complimentsRoutes.post("/", createComplimentsController.handle);
complimentsRoutes.get("/user/receive", listReceiveComplimentsController.handle);
complimentsRoutes.get("/user/send", listSendComplimentsController.handle);

export { complimentsRoutes };
