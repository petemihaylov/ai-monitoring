export abstract class IGenericRepository<T> {
  abstract getAll(): Promise<T[]>;

  abstract create(item: T): Promise<T>;

  abstract get(id: any): Promise<T>;

  abstract update(id: string, item: T);
}
