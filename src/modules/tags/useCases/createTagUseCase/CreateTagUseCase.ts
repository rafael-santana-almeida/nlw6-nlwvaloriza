import { inject, injectable } from "tsyringe";

import { Tag } from "@modules/tags/infra/typeorm/entities/Tag";
import { ITagsRepository } from "@modules/tags/repositories/ITagsRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class CrateTagUseCase {
  constructor(
    @inject("TagsRepository")
    private tagsRepository: ITagsRepository
  ) {}

  async execute(name: string): Promise<Tag> {
    if (!name) {
      throw new AppError("Invalid name!");
    }

    const tagAlreadyExists = await this.tagsRepository.findByName(name);

    if (tagAlreadyExists) {
      throw new AppError("Tag already exists!");
    }

    const tag = await this.tagsRepository.create(name);

    return tag;
  }
}

export { CrateTagUseCase };
