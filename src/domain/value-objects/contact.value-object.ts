import { IContactDomainEntity } from '../entities/contact.domain-entity';

export abstract class ContactValueObject implements IContactDomainEntity {
  id: string;
  accountId: string;
  name: string;
  phone: string;
  status: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
