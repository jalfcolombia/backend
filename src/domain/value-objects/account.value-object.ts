import { IAccountDomainEntity } from '../entities/account.domain-entity';

export abstract class AccountValueObject implements IAccountDomainEntity {
  user: string;
  password: string;
  id: string;
  status: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
