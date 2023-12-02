import { Model} from './model.class';
import { ILog } from '../interfaces/log.interface';

export class Log implements ILog {
  _id: string;
  predictionId: number;
  model: Model;
  status: number;
  timestamp: string;
  responseTime: number;

  constructor(log: ILog) {
    this._id = log._id;
    this.predictionId = log.predictionId;
    this.model = new Model(log.model);
    this.status = log.status;
    this.timestamp = log.timestamp;
    this.responseTime = log.responseTime;
  }
}
