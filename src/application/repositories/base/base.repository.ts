export interface IBaseRepository<T> {
  findAll(): Promise<T[]>;
  create(entity: T): Promise<T>;
  update(entity: T): Promise<T | null>;
  delete(id: string): Promise<T | null>;
}
