export abstract class BaseDomainEntity {
  id: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
}
