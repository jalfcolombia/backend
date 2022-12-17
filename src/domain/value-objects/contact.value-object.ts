import {
  IsNotEmpty,
  IsNumberString,
  IsString,
  IsUUID,
  MaxLength,
} from 'class-validator';
import { ContactDomainEntity } from '../entities';
import { BaseValueObject } from './base/base.value-object';

export abstract class ContactValueObject
  extends BaseValueObject
  implements ContactDomainEntity
{
  @IsUUID(4, {
    message: 'The provided ID does not meet the specifications of a UUID v4',
  })
  accountId: string;

  @IsNotEmpty({ message: 'The name field is mandatory' })
  @IsString({ message: 'The name is a string field' })
  @MaxLength(200, {
    message: 'The name cannot exceed 200 characters in length',
  })
  name: string;

  @IsNotEmpty({ message: 'The phone field is mandatory' })
  @IsNumberString({
    message:
      'The phone number although it is a number, the field must be a string',
  })
  @MaxLength(200, {
    message: 'The telephone number must not be longer than 30 characters',
  })
  phone: string;
}
