import { AccountDomainEntity } from '../../domain/entities';
import { ISecurityDomainService } from '../../domain/services';
import { IUseCaseInterface } from './interfaces/use-case.interface';

export class SignOutUseCase<
  T extends ISecurityDomainService<AccountDomainEntity>,
> implements IUseCaseInterface
{
  constructor(private readonly securityService: T) {}

  execute(): any {
    /* TODO document why this method 'execute' is empty */
  }
}
