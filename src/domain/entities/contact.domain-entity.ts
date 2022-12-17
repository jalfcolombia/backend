import { BaseDomainEntity } from './base/base.domain-entity';

export abstract class IContactDomainEntity extends BaseDomainEntity {
  accountId: string;
  name: string;
  phone: string;
}
