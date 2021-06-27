import { container } from "tsyringe";

import { ComplimentsRepository } from "@modules/compliments/infra/typeorm/repositories/ComplimentsRepository";
import { IComplimentsRepository } from "@modules/compliments/repositories/IComplimentsRepository";
import { TagsRepository } from "@modules/tags/infra/typeorm/repositories/TagsRepository";
import { ITagsRepository } from "@modules/tags/repositories/ITagsRepository";
import { UsersRepository } from "@modules/users/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IComplimentsRepository>(
  "ComplimentsRepository",
  ComplimentsRepository
);

container.registerSingleton<ITagsRepository>("TagsRepository", TagsRepository);
