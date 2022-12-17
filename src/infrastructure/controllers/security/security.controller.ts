import {
  Body,
  Controller,
  Delete,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { SignInDTO, SecurityService } from '../../databases';
import { AccountEntity } from '../../databases/postgres/entities';
import { SignInUseCase } from '../../../application/use-cases/sign-in.use-case';
import { DeleteAccountUseCase } from '../../../application/use-cases/delete-account.use-case';

@Controller('security')
export class SecurityController {
  private signInUseCase: SignInUseCase<
    SecurityService,
    AccountEntity,
    SignInDTO
  >;

  private deleteAccountUseCase: DeleteAccountUseCase<
    SecurityService,
    AccountEntity
  >;

  constructor(private readonly securityService: SecurityService) {}

  @Post('account')
  signIn(@Body() signedIn: SignInDTO): Promise<AccountEntity> {
    this.signInUseCase = new SignInUseCase(this.securityService);
    return this.signInUseCase.execute(signedIn);
  }

  @Delete('account/:id')
  deleteAccount(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<AccountEntity> {
    this.deleteAccountUseCase = new DeleteAccountUseCase(this.securityService);
    return this.deleteAccountUseCase.execute(id);
  }
}
