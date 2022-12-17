import { BaseDomainEntity } from './base/base.domain-entity';

export interface IAccountDomainEntity extends BaseDomainEntity {
  user: string;
  password: string;
}
