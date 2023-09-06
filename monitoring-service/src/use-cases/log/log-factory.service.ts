import { Injectable } from '@nestjs/common';
import { Log } from '../../core/entities';
import { CreateLogDto, UpdateLogDto } from '../../core/dtos';

@Injectable()
export class LogFactoryService {
  createNewLog(createLogDto: CreateLogDto) {
    const newLog = new Log();
    newLog.id = createLogDto.id;
    newLog.model = createLogDto.model;
    newLog.predictionId = createLogDto.predictionId;
    newLog.responseTime = createLogDto.responseTime;
    newLog.status = createLogDto.status;
    newLog.timestamp = createLogDto.timestamp;

    return newLog;
  }

  updateLog(updateLogDto: UpdateLogDto) {
    const newLog = new Log();
    newLog.id = updateLogDto.id;
    newLog.model = updateLogDto.model;
    newLog.predictionId = updateLogDto.predictionId;
    newLog.responseTime = updateLogDto.responseTime;
    newLog.status = updateLogDto.status;
    newLog.timestamp = updateLogDto.timestamp;

    return newLog;
  }
}
