import { ISecurityService } from '../services/security.service';
import { IUseCaseInterface } from './interfaces/use-case.interface';
import { IAccountDomainEntity } from '../../domain/entities/account.domain-entity';

export class SignInUseCase<T extends ISecurityService<IAccountDomainEntity>>
  implements IUseCaseInterface
{
  constructor(private readonly securityService: T) {}

  execute(account: IAccountDomainEntity): any {
    /* TODO document why this method 'execute' is empty */
    console.log('SignInUseCase');
    this.securityService.signIn(account);
  }
}
