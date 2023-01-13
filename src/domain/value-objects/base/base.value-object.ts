import { IsBoolean, IsDate, IsOptional, IsUUID } from 'class-validator';

export abstract class BaseValueObject {
  @IsUUID(4, {
    message: 'The provided ID does not meet the specifications of a UUID v4',
  })
  id: string;

  @IsBoolean({ message: 'Status must be boolean, false or true' })
  status = true;

  @IsDate({ message: 'The data is not a valid date' })
  createdAt: Date | number;

  @IsOptional()
  @IsDate({ message: 'The data is not a valid date' })
  updatedAt: Date | number | null;

  @IsOptional()
  @IsDate({ message: 'The data is not a valid date' })
  deletedAt: Date | number | null;
}
