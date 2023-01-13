export abstract class DomainEntityBase {
  id: string;
  status: boolean;
  createdAt: Date | number;
  updatedAt: Date | number | null;
  deletedAt: Date | number | null;
}
