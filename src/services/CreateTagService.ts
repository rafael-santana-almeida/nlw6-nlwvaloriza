import { getCustomRepository } from "typeorm";

import { Tag } from "../entities/Tag";
import { AppError } from "../errors/AppError";
import { TagsRepository } from "../repositories/TagsRepository";

class CrateTagService {
  async execute(name: string): Promise<Tag> {
    const tagsRepository = getCustomRepository(TagsRepository);

    if (!name) {
      throw new AppError("Invalid name!");
    }

    const tagAlreadyExists = await tagsRepository.findOne({ name });

    if (tagAlreadyExists) {
      throw new AppError("Tag already exists!");
    }

    const tag = tagsRepository.create({ name });

    await tagsRepository.save(tag);

    return tag;
  }
}

export { CrateTagService };
