import { IBaseRepository } from './base/base.repository';
import { EmailDomainEntity } from '../../domain/entities';

export type IEmailRepository<T extends EmailDomainEntity> = IBaseRepository<T>;
