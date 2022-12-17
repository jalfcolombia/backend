import { Body, Controller, Post } from '@nestjs/common';
import { SignInDTO, SecurityService } from '../../databases';
import { SignInUseCase } from '../../../application/use-cases/sign-in.use-case';

@Controller('security')
export class SecurityController {
  private signInUseCase: SignInUseCase<SecurityService>;

  constructor(private readonly securityService: SecurityService) {}

  @Post()
  signIn(@Body() signedIn: SignInDTO) {
    console.log('signedIn', signedIn);
    this.signInUseCase = new SignInUseCase(this.securityService);
    this.signInUseCase.execute(signedIn);
    return '';
  }
}
