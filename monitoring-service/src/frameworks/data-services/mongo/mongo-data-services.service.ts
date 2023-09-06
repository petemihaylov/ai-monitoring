import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServices, IGenericRepository, Log } from '../../../core';
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
  constructor(
    @InjectModel(Log.name)
    private LogRepository: Model<LogDocument>,
    @InjectModel(Log.name)
    private ModelRepository: Model<ModelDocument>,
  ) {}
  logRepository: IGenericRepository<LogEntity>;
  modelRepository: IGenericRepository<ModelEntity>;

  onApplicationBootstrap() {
    this.logRepository = new MongoGenericRepository<Log>(this.LogRepository);
    this.modelRepository = new MongoGenericRepository<ModelEntity>(
      this.ModelRepository,
    );
  }
}
