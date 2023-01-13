import { DomainEntityBase } from './base/domain-entity.base';

export class AccountDomainEntity extends DomainEntityBase {
  user: string;
  password: string;
}
