import { IModel } from '../interfaces/model.interface';

export class Model {
  _id: string;
  name: string;

  constructor(model: IModel) {
    this._id = model._id;
    this.name = model.name;
  }
}
