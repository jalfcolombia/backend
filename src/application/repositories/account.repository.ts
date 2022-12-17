import { IBaseRepository } from './base/base.repository';
import { IAccountDomainEntity } from '../../domain/entities/account.domain-entity';

export type IAccountRepository<T extends IAccountDomainEntity> =
  IBaseRepository<T>;
