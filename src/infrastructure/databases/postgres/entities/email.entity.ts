import { IEmailDomainEntity } from '../../../../domain/entities/email.domain-entity';

export class EmailEntity implements IEmailDomainEntity {
  contactId: string;
  mail: string;
  id: string;
  status: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
