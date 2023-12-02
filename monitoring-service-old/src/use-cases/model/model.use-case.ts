import { Injectable } from '@nestjs/common';
import { Model } from '../../core/entities';
import { PostgreDataServices } from 'src/frameworks/data-services/postgre/postgre-data-services.service';
import { IDataServices } from 'src/core';

@Injectable()
export class ModelUseCases {
  constructor(private dataServices: IDataServices) {}

  async getAllModels(): Promise<Model[]> {
    return this.dataServices.models.getAll();
  }

  async getModelById(id: any): Promise<Model> {
    return this.dataServices.models.get(id);
  }

  async createModel(model: Model): Promise<Model> {
    return this.dataServices.models.create(model);
  }

  async updateModel(modelId: any, model: Model): Promise<Model> {
    return this.dataServices.models.update(modelId, model);
  }
}
