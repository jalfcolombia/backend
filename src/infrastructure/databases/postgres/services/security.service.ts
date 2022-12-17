import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { AccountEntity } from '../entities';
import { AccountRepository } from '../repositories';
import { ISecurityDomainService } from '../../../../domain/services';

@Injectable()
export class SecurityService implements ISecurityDomainService<AccountEntity> {
  constructor(private readonly accountRepository: AccountRepository) {}

  async signIn(account: AccountEntity): Promise<AccountEntity> {
    return await this.accountRepository.create(account);
  }

  signOut(id: string): Promise<AccountEntity> {
    throw new InternalServerErrorException('Method not implemented.');
  }

  signUp(account: AccountEntity): Promise<AccountEntity> {
    throw new InternalServerErrorException('Method not implemented.');
  }

  async removeAccount(id: string): Promise<AccountEntity> {
    return await this.accountRepository.delete(id);
  }

  async resetPassword(id: string, newPassword: string): Promise<AccountEntity> {
    const account = new AccountEntity();
    account.password = newPassword;
    return await this.accountRepository.update(id, account);
  }
}
