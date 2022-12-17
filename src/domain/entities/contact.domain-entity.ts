import { BaseDomainEntity } from './base/base.domain-entity';

export class ContactDomainEntity extends BaseDomainEntity {
  accountId: string;
  name: string;
  phone: string | null;
}
