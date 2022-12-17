import { IBaseRepository } from './base/base.repository';
import { IContactDomainEntity } from '../../domain/entities/contact.domain-entity';

export type IContactRepository<T extends IContactDomainEntity> =
  IBaseRepository<T>;
