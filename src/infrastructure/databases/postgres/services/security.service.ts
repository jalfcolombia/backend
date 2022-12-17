import { Injectable } from '@nestjs/common';
import { AccountEntity } from '../entities/account.entity';
import { AccountRepository } from '../repositories/account.repository';
import { ISecurityService } from '../../../../application/services/security.service';

@Injectable()
export class SecurityService implements ISecurityService<AccountEntity> {
  constructor(private readonly accountRepository: AccountRepository) {}

  signIn(account: AccountEntity): Promise<boolean> {
    console.log('Signing in Service');
    return Promise.resolve(true);
  }

  signOut(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  signUp(account: AccountEntity): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  removeAccount(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  resetPassword(id: string, newPassword: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
