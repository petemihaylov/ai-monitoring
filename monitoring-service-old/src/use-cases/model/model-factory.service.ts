import { Injectable } from '@nestjs/common';
import { Model } from '../../core/entities';
import { CreateModelDto, UpdateModelDto } from '../../core/dtos';

@Injectable()
export class ModelFactoryService {
  createNewModel(createLogDto: CreateModelDto) {
    const newModel = new Model();
    newModel.name = createLogDto.name;

    return newModel;
  }

  updateModel(UpdateModelDto: UpdateModelDto) {
    const newModel = new Model();
    newModel.name = UpdateModelDto.name;

    return newModel;
  }
}
