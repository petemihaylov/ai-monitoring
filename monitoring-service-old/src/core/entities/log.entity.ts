import { HttpStatus } from '@nestjs/common';
import { Model } from './model.entity';

export class Log {
  predictionId: number;
  model: Model;
  status: HttpStatus;
  timestamp: Date;
  responseTime: number;
}
