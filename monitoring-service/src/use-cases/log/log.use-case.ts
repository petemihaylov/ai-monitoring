import { Injectable } from '@nestjs/common';
import { Log } from '../../core/entities';
import { IDataServices } from 'src/core';

@Injectable()
export class LogUseCases {
  constructor(private dataServices: IDataServices) {}

  async getAllLogs(): Promise<Log[]> {
    return this.dataServices.logRepository.getAll();
  }

  async getLogById(id: any): Promise<Log> {
    return this.dataServices.logRepository.get(id);
  }

  async createLog(log: Log): Promise<Log> {
    return this.dataServices.logRepository.create(log);
  }

  async updateLog(logId: any, log: Log): Promise<Log> {
    await this.dataServices.logRepository.update(logId, log);
    return this.dataServices.logRepository.get(logId);
  }
}
