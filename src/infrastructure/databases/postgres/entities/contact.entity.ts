import { IContactDomainEntity } from '../../../../domain/entities/contact.domain-entity';

export class ContactEntity implements IContactDomainEntity {
  accountId: string;
  name: string;
  phone: string;
  id: string;
  status: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
