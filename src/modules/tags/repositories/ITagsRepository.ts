import { Tag } from "../infra/typeorm/entities/Tag";

interface ITagsRepository {
  create(name: string): Promise<Tag>;
  findByName(name: string): Promise<Tag>;
  list(): Promise<Tag[]>;
}

export { ITagsRepository };
