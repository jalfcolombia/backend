import {
  Body,
  Controller,
  Delete,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { SignInDTO } from '../../common/dtos';
import {
  SignInUseCase,
  DeleteAccountUseCase,
} from '../../../application/use-cases';
import { AccountEntity, SecurityService } from '../../databases/postgres';

@Controller('security')
export class SecurityController {
  constructor(private readonly securityService: SecurityService) {}

  @Post('account')
  signIn(@Body() signedIn: SignInDTO): Promise<AccountEntity> {
    const signInUseCase = new SignInUseCase<SecurityService, AccountEntity>(
      this.securityService,
    );
    return signInUseCase.execute(signedIn);
  }

  @Delete('account/:id')
  deleteAccount(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<AccountEntity> {
    const deleteAccountUseCase = new DeleteAccountUseCase<
      SecurityService,
      AccountEntity
    >(this.securityService);
    return deleteAccountUseCase.execute(id);
  }
}
