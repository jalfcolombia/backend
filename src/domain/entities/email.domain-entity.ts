import { DomainEntityBase } from './base/domain-entity.base';

export class EmailDomainEntity extends DomainEntityBase {
  contactId: string;
  mail: string;
}
