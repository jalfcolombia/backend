import { IsEmail, IsUUID } from 'class-validator';
import { EmailDomainEntity } from '../entities/email.domain-entity';
import { BaseValueObject } from './base/base.value-object';

export abstract class EmailValueObject
  extends BaseValueObject
  implements EmailDomainEntity
{
  @IsUUID(4, {
    message: 'The provided ID does not meet the specifications of a UUID v4',
  })
  contactId: string;

  @IsEmail({}, { message: 'The data is not a valid email address' })
  mail: string;
}
