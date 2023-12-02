import { Log, Model } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract logs: IGenericRepository<Log>;
  abstract models: IGenericRepository<Model>;
}
