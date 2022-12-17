import { IEmailDomainEntity } from '../entities/email.domain-entity';

export abstract class EmailValueObject extends IEmailDomainEntity {
  id: string;
  contactId: string;
  mail: string;
  status: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
