import { IAccountDomainEntity } from '../../../../domain/entities/account.domain-entity';

export class AccountEntity implements IAccountDomainEntity {
  id: string;
  user: string;
  password: string;
  status: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
