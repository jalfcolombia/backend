import { IUseCaseInterface } from './interfaces';
import { AccountDomainEntity, ISecurityDomainService } from '../../domain';

export class SignInUseCase<
  T extends ISecurityDomainService<C>,
  C extends AccountDomainEntity,
> implements IUseCaseInterface
{
  constructor(private readonly securityService: T) {}

  execute<F extends AccountDomainEntity>(account: F): Promise<C> {
    const newAccount = new AccountDomainEntity() as C;
    newAccount.user = account.user;
    newAccount.password = account.password;
    return this.securityService.signIn(newAccount);
  }
}
