import { Injectable } from '@nestjs/common';
import { Model } from '../../core/entities';
import { PostgreDataServices } from 'src/frameworks/data-services/postgre/postgre-data-services.service';
import { IDataServices } from 'src/core';

@Injectable()
export class ModelUseCases {
  constructor(private dataServices: IDataServices) {}

  async getAllModels(): Promise<Model[]> {
    return this.dataServices.modelRepository.getAll();
  }

  async getModelById(id: any): Promise<Model> {
    return this.dataServices.modelRepository.get(id);
  }

  async createModel(model: Model): Promise<Model> {
    return this.dataServices.modelRepository.create(model);
  }

  async updateModel(modelId: any, model: Model): Promise<Model> {
    await this.dataServices.modelRepository.update(modelId, model);
    return this.dataServices.modelRepository.get(modelId);
  }
}
