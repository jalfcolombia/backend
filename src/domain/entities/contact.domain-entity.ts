import { DomainEntityBase } from './base/domain-entity.base';

export class ContactDomainEntity extends DomainEntityBase {
  accountId: string;
  name: string;
  phone: string | null;
}
