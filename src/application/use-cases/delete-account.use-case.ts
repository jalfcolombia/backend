import { AccountDomainEntity } from '../../domain/entities';
import { ISecurityDomainService } from '../../domain/services';
import { IUseCaseInterface } from './interfaces/use-case.interface';

export class DeleteAccountUseCase<
  T extends ISecurityDomainService<C>,
  C extends AccountDomainEntity,
> implements IUseCaseInterface
{
  constructor(private readonly securityService: T) {}

  execute(id: string): Promise<C> {
    return this.securityService.removeAccount(id);
  }
}
