import { IEmailDomainEntity } from '../../domain/entities/email.domain-entity';
import { IContactDomainEntity } from '../../domain/entities/contact.domain-entity';

export interface IContactService<
  T extends IContactDomainEntity | IEmailDomainEntity,
> {
  findById(id: string): Promise<T | null>;
  findByName(name: string): Promise<T | null>;
  findByPhone(phone: string): Promise<T | null>;
  findByEmail(email: string): Promise<T | null>;
  findAll(): Promise<T[]>;
  create(contact: T): Promise<T>;
  update(id: string, contact: T): Promise<T | null>;
  delete(id: string): Promise<T | null>;
  enable(id: string): Promise<boolean>;
  disable(id: string): Promise<boolean>;
  createEmail(email: T): Promise<T>;
  updateEmail(id: string, email: T): Promise<T | null>;
  deleteEmail(id: string): Promise<T | null>;
  enableEmail(id: string): Promise<boolean>;
  disableEmail(id: string): Promise<boolean>;
}
