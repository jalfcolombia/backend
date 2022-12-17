import { BaseDomainEntity } from './base/base.domain-entity';

export class AccountDomainEntity extends BaseDomainEntity {
  user: string;
  password: string;
}
