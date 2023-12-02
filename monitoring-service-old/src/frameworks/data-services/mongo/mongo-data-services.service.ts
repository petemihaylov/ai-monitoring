import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServices } from '../../../core';
import { MongoGenericRepository } from './mongo-generic-repository';
import {
  Log as LogEntity,
  LogDocument,
  ModelDocument,
  Model as ModelEntity,
} from './model';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  public logs: MongoGenericRepository<LogEntity>;
  public models: MongoGenericRepository<ModelEntity>;

  constructor(
    @InjectModel(LogEntity.name)
    private LogRepository: Model<LogDocument>,
    @InjectModel(ModelEntity.name)
    private ModelRepository: Model<ModelDocument>,
  ) {}

  onApplicationBootstrap() {
    this.logs = new MongoGenericRepository<LogEntity>(this.LogRepository);
    this.models = new MongoGenericRepository<ModelEntity>(this.ModelRepository);
  }
}
