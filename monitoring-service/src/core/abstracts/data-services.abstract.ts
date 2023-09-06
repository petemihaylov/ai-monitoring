import { Log, Model } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract logRepository: IGenericRepository<Log>;

  abstract modelRepository: IGenericRepository<Model>;
}
