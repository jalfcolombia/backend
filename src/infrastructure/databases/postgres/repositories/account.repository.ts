import { Injectable } from '@nestjs/common';
import { AccountEntity } from '../entities/account.entity';
import { IAccountRepository } from '../../../../application/repositories/account.repository';

@Injectable()
export class AccountRepository implements IAccountRepository<AccountEntity> {
  findAll(): Promise<AccountEntity[]> {
    throw new Error('Method not implemented.');
  }
  create(entity: AccountEntity): Promise<AccountEntity> {
    throw new Error('Method not implemented.');
  }
  update(entity: AccountEntity): Promise<AccountEntity | null> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<AccountEntity | null> {
    throw new Error('Method not implemented.');
  }
}
