import { IUseCaseInterface } from './interfaces/use-case.interface';
import { ISecurityService } from '../services/security.service';
import { IAccountDomainEntity } from '../../domain/entities/account.domain-entity';

export class SignUpUseCase<T extends ISecurityService<IAccountDomainEntity>>
  implements IUseCaseInterface
{
  constructor(private readonly securityService: T) {}

  execute(): any {
    /* TODO document why this method 'execute' is empty */
  }
}
