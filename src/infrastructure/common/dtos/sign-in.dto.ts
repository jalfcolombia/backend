import { Exclude } from 'class-transformer';
import { IsEmpty, IsOptional } from 'class-validator';
import { AccountValueObject } from '../../../domain/value-objects/account.value-object';

export class SignInDTO extends AccountValueObject {
  @Exclude()
  @IsEmpty({ always: true })
  @IsOptional({ always: true })
  id: string;

  @Exclude()
  @IsOptional({ always: true })
  status = false;

  @Exclude()
  @IsEmpty({ always: true })
  @IsOptional({ always: true })
  createdAt: Date;

  @Exclude()
  @IsEmpty({ always: true })
  @IsOptional({ always: true })
  updatedAt: Date | null;

  @Exclude()
  @IsEmpty({ always: true })
  @IsOptional({ always: true })
  deletedAt: Date | null;
}
