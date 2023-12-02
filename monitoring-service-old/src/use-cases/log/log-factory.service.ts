import { Injectable } from '@nestjs/common';
import { Log } from '../../core/entities';
import { CreateLogDto, UpdateLogDto } from '../../core/dtos';

@Injectable()
export class LogFactoryService {
  createNewLog(createLogDto: CreateLogDto) {
    const newLog = new Log();
    newLog.model = createLogDto.modelId;
    newLog.predictionId = createLogDto.predictionId;
    newLog.responseTime = createLogDto.responseTime;
    newLog.status = createLogDto.status;
    newLog.timestamp = createLogDto.timestamp;

    return newLog;
  }

  updateLog(updateLogDto: UpdateLogDto) {
    const newLog = new Log();
    newLog.model = updateLogDto.modelId;
    newLog.predictionId = updateLogDto.predictionId;
    newLog.responseTime = updateLogDto.responseTime;
    newLog.status = updateLogDto.status;
    newLog.timestamp = updateLogDto.timestamp;

    return newLog;
  }
}
