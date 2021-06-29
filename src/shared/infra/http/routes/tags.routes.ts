import { Router } from "express";

import { CreateTagController } from "@modules/tags/useCases/createTag/CreateTagController";
import { ListTagsController } from "@modules/tags/useCases/listTags/ListTagsController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const tagsRoutes = Router();

const createTagController = new CreateTagController();
const listTagsController = new ListTagsController();

tagsRoutes.use(ensureAuthenticated);

tagsRoutes.get("/", listTagsController.handle);
tagsRoutes.post("/", ensureAdmin, createTagController.handle);

export { tagsRoutes };
