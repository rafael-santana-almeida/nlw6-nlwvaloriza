import { classToClass } from "class-transformer";
import { getCustomRepository } from "typeorm";

import { Tag } from "../entities/Tag";
import { TagsRepository } from "../repositories/TagsRepository";

class ListTagsService {
  async execute(): Promise<Tag[]> {
    const tagsRepository = getCustomRepository(TagsRepository);

    const tags = await tagsRepository.find();

    return classToClass(tags);
  }
}

export { ListTagsService };
