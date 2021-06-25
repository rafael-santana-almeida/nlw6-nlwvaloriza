import { getCustomRepository } from "typeorm";

import { Tag } from "../entities/Tag";
import { TagsRepository } from "../repositories/TagsRepository";

class CrateTagService {
  async execute(name: string): Promise<Tag> {
    const tagsRepository = getCustomRepository(TagsRepository);

    if (!name) {
      throw new Error("Invalid name!");
    }

    const tagAlreadyExists = await tagsRepository.findOne({ name });

    if (tagAlreadyExists) {
      throw new Error("Tag already exists!");
    }

    const tag = tagsRepository.create({ name });

    await tagsRepository.save(tag);

    return tag;
  }
}

export { CrateTagService };
