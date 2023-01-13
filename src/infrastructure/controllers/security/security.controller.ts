import {
  Body,
  Controller,
  Delete,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { SignInDTO } from '../../common/dtos';
import { AccountEntity } from '../../databases/postgres/entities';
import { SecurityService } from '../../databases/postgres/services';
import {
  SignInUseCase,
  DeleteAccountUseCase,
} from '../../../application/use-cases';

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
