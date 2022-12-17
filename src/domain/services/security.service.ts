import { AccountDomainEntity } from '../../domain/entities/account.domain-entity';

export interface ISecurityDomainService<T extends AccountDomainEntity> {
  signIn(account: T): Promise<T>;
  signOut(id: string): Promise<T>;
  signUp(account: T): Promise<T>;
  removeAccount(id: string): Promise<T>;
  resetPassword(id: string, newPassword: string): Promise<T>;
}
