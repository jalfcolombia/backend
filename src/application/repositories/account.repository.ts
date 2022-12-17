import { IBaseRepository } from './base/base.repository';
import { AccountDomainEntity } from '../../domain/entities';

export type IAccountRepository<T extends AccountDomainEntity> =
  IBaseRepository<T>;
