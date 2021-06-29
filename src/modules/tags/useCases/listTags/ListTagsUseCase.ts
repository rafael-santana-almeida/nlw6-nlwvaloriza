import { classToClass } from "class-transformer";
import { inject, injectable } from "tsyringe";

import { Tag } from "@modules/tags/infra/typeorm/entities/Tag";
import { ITagsRepository } from "@modules/tags/repositories/ITagsRepository";

@injectable()
class ListTagsUseCase {
  constructor(
    @inject("TagsRepository")
    private tagsRepository: ITagsRepository
  ) {}

  async execute(): Promise<Tag[]> {
    const tags = await this.tagsRepository.list();

    return classToClass(tags);
  }
}

export { ListTagsUseCase };
