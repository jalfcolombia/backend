import { BaseDomainEntity } from './base/base.domain-entity';

export abstract class IEmailDomainEntity extends BaseDomainEntity {
  contactId: string;
  mail: string;
}
