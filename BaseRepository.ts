import { Repository, getConnection, EntityTarget, UpdateResult, DeleteResult } from 'typeorm';

export class BaseRepository<TModel, TModelType> {
  protected repository: Repository<TModel>;

  constructor(repo: EntityTarget<TModel>) {
    this.repository = getConnection().getRepository(repo);
  }

  async list(): Promise<TModel[]> {
    return await this.repository.find();
  }

  async create(data: TModelType): Promise<TModel> {
    const dataCreate = this.repository.create(data);
    return this.repository.save(dataCreate);
  }

  async getOne(param: TModelType): Promise<TModel | false> {
    const get = await this.repository.findOne({ where: { ...param } });
    if (!get) return false;
    return get;
  }

  async putById(id: number, data: TModelType): Promise<UpdateResult> {
    return this.repository.update(id, data);
  }

  async deleteByid(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
