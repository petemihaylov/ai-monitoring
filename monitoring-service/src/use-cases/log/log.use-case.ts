import { Injectable } from '@nestjs/common';
import { Log } from '../../core/entities';
import { IDataServices } from 'src/core';

@Injectable()
export class LogUseCases {
  constructor(private dataServices: IDataServices) {}

  async getAllLogs(): Promise<Log[]> {
    return this.dataServices.logs.getAll();
  }

  async getLogById(id: any): Promise<Log> {
    return this.dataServices.logs.get(id);
  }

  async createLog(log: Log): Promise<Log> {
    return this.dataServices.logs.create(log);
  }

  async updateLog(logId: any, log: Log): Promise<Log> {
    return this.dataServices.logs.update(logId, log);
  }
}
