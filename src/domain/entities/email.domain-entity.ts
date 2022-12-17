import { BaseDomainEntity } from './base/base.domain-entity';

export class EmailDomainEntity extends BaseDomainEntity {
  contactId: string;
  mail: string;
}
