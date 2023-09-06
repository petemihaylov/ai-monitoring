import { Model } from 'mongoose';
import { IGenericRepository } from '../../../core';

export class MongoGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Model<T>;
  private _populateOnFind: string[];

  constructor(repository: Model<T>, populateOnFind: string[] = []) {
    this._repository = repository;
    this._populateOnFind = populateOnFind;
  }

  async getAll(): Promise<T[]> {
    return await this._repository.find().populate(this._populateOnFind).exec();
  }

  async create(item: T): Promise<T> {
    return await this._repository.create(item);
  }

  async update(id: string, item: T) {
    return await this._repository.findByIdAndUpdate(id, item);
  }
  async get(id: any): Promise<T> {
    const document = await this._repository
      .findById(id)
      .populate(this._populateOnFind)
      .exec();

    return document ? (document.toObject() as T) : null;
  }
}
