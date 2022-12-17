export interface IBaseRepository<T> {
  findAll(): Promise<T[]>;
  create(entity: T): Promise<T>;
  update(id: string, entity: T): Promise<T>;
  delete(id: string): Promise<T>;
}
