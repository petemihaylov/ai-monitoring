import { IModel } from './model.interface';

export interface ILog {
  _id: string;
  predictionId: number;
  model: IModel;
  status: number;
  timestamp: string;
  responseTime: number;
}
