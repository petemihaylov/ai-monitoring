export abstract class IGenericRepository<T> {
  public abstract getAll(): Promise<T[]>;

  public abstract create(item: T): Promise<T>;

  public abstract get(id: any): Promise<T>;

  public abstract update(id: string, item: T);
}
