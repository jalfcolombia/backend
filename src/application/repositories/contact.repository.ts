import { IBaseRepository } from './base/base.repository';
import { ContactDomainEntity } from '../../domain/entities';

export type IContactRepository<T extends ContactDomainEntity> =
  IBaseRepository<T>;
