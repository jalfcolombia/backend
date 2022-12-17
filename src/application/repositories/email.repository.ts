import { IBaseRepository } from './base/base.repository';
import { IEmailDomainEntity } from '../../domain/entities/email.domain-entity';

export type IEmailRepository<T extends IEmailDomainEntity> = IBaseRepository<T>;
