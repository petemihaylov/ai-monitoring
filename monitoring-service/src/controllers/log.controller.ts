import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CreateLogDto, UpdateLogDto } from '../core/dtos';
import { LogUseCases } from 'src/use-cases/log/log.use-case';
import { LogFactoryService } from 'src/use-cases/log/log-factory.service';

@Controller('api/log')
export class LogController {
  constructor(
    private logUseCases: LogUseCases,
    private logFactoryService: LogFactoryService,
  ) {}

  @Get()
  async getAll() {
    return this.logUseCases.getAllLogs();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.logUseCases.getLogById(id);
  }

  @Post()
  createAuthor(@Body() logDto: CreateLogDto) {
    const log = this.logFactoryService.createNewLog(logDto);
    return this.logUseCases.createLog(log);
  }

  @Put(':id')
  updateAuthor(@Param('id') id: string, @Body() updateLogDto: UpdateLogDto) {
    const log = this.logFactoryService.updateLog(updateLogDto);
    return this.logUseCases.updateLog(id, log);
  }
}
