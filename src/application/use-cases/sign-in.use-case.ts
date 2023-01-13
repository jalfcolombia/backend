import {
  AccountDomainEntity,
  AccountValueObject,
  ISecurityDomainService,
} from '../../domain';
import { IUseCaseInterface } from './interfaces/use-case.interface';

export class SignInUseCase<
  T extends ISecurityDomainService<C>,
  C extends AccountDomainEntity,
  D extends AccountValueObject,
> implements IUseCaseInterface
{
  constructor(private readonly securityService: T) {}

  execute(account: D): Promise<C> {
    const newAccount = new AccountDomainEntity() as C;
    newAccount.user = account.user;
    newAccount.password = account.password;
    return this.securityService.signIn(newAccount);
  }
}
