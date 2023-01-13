import { IsNotEmpty, IsString, Matches, MaxLength } from 'class-validator';
import { AccountDomainEntity } from '../../../domain/entities';

export class SignInDTO extends AccountDomainEntity {
  @IsNotEmpty({ message: 'The user field is mandatory' })
  @IsString({ message: 'The username is a string field' })
  @MaxLength(200, {
    message: 'The username cannot exceed 200 characters in length',
  })
  user: string;

  @IsNotEmpty({ message: 'Password field is mandatory' })
  @Matches(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/), {
    message: 'The password must be at least 8 characters long and alphanumeric',
  })
  password: string;
}
