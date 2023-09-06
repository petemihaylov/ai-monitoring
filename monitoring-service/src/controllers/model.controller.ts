import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateModelDto, UpdateModelDto } from 'src/core/dtos';
import { ModelFactoryService } from 'src/use-cases/model/model-factory.service';
import { ModelUseCases } from 'src/use-cases/model/model.use-case';

@Controller('api/model')
export class ModelController {
  constructor(
    private modelUseCases: ModelUseCases,
    private logFactoryService: ModelFactoryService,
  ) {}

  @Get()
  async getAll() {
    return this.modelUseCases.getAllModels();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.modelUseCases.getModelById(id);
  }

  @Post()
  createAuthor(@Body() modelDto: CreateModelDto) {
    const log = this.logFactoryService.createNewModel(modelDto);
    return this.modelUseCases.createModel(log);
  }

  @Put(':id')
  updateAuthor(
    @Param('id') id: string,
    @Body() updateModelDto: UpdateModelDto,
  ) {
    const log = this.logFactoryService.updateModel(updateModelDto);
    return this.modelUseCases.updateModel(id, log);
  }
}
