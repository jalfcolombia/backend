import { AccountDomainEntity } from '../../domain/entities';
import { ISecurityDomainService } from '../../domain/services';
import { IUseCaseInterface } from './interfaces/use-case.interface';
import { AccountValueObject } from '../../domain/value-objects/account.value-object';

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
