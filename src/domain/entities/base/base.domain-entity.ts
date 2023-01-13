export abstract class BaseDomainEntity {
  id: string;
  status: boolean;
  createdAt: Date | number;
  updatedAt: Date | number | null;
  deletedAt: Date | number | null;
}
