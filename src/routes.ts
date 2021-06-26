import { Router } from "express";

import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserConstroller";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListUsersController } from "./controllers/ListUsersController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserReceiveComplimentsController =
  new ListUserReceiveComplimentsController();
const listUserSendComplimentsController =
  new ListUserSendComplimentsController();
const listTagsController = new ListTagsController();

router.post("/users", createUserController.handle);

router.post("/login", authenticateUserController.handle);
router.post("/compliments", createComplimentController.handle);

router.use(ensureAuthenticated);

router.get("/users", listUsersController.handle);

router.get("/tags", listTagsController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);

router.get(
  "/users/compliments/receive",
  listUserReceiveComplimentsController.handle
);

router.get("/users/compliments/send", listUserSendComplimentsController.handle);

export { router };
