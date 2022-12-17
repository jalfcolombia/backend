import { Exclude } from 'class-transformer';
import { AccountValueObject } from '../../../../domain/value-objects/account.value-object';

export class SignInDTO extends AccountValueObject {
  @Exclude()
  id: string;

  @Exclude()
  status = false;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date | null;

  @Exclude()
  deletedAt: Date | null;
}
