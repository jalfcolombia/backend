import { IAccountDomainEntity } from '../../domain/entities/account.domain-entity';

export interface ISecurityService<T extends IAccountDomainEntity> {
  signIn(account: T): Promise<boolean>;
  signOut(id: string): Promise<boolean>;
  signUp(account: T): Promise<boolean>;
  removeAccount(id: string): Promise<boolean>;
  resetPassword(id: string, newPassword: string): Promise<boolean>;
}
