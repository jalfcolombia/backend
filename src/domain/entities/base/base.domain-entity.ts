export abstract class BaseDomainEntity {
  id: string;
  status: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
