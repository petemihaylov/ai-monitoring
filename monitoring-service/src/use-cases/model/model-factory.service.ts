import { Injectable } from '@nestjs/common';
import { Model } from '../../core/entities';
import { CreateModelDto, UpdateModelDto } from '../../core/dtos';

@Injectable()
export class ModelFactoryService {
  createNewModel(createLogDto: CreateModelDto) {
    const newModel = new Model();
    newModel.id = createLogDto.id;

    return newModel;
  }

  updateModel(UpdateModelDto: UpdateModelDto) {
    const newModel = new Model();
    newModel.id = UpdateModelDto.id;

    return newModel;
  }
}
