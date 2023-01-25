import { Column, Entity, Index, OneToMany } from 'typeorm';
import { AccountDomainEntity } from '../../../../domain/entities';
import { ContactEntity } from './contact.entity';

@Index('account_account_deleted_at_Idx', ['deletedAt'], {})
@Index('pkaccount', ['id'], { unique: true })
@Entity('account', { schema: 'public' })
export class AccountEntity extends AccountDomainEntity {
  @Column('uuid', {
    primary: true,
    name: 'account_id',
    default: () => 'uuid_generate_v4()',
  })
  id: string;

  @Column('character varying', { name: 'account_user', length: 500 })
  user: string;

  @Column('character varying', { name: 'account_password', length: 128 })
  password: string;

  @Column('boolean', { name: 'account_status', default: () => 'true' })
  status: boolean;

  @Column('timestamp with time zone', {
    name: 'account_created_at',
    default: () => 'now()',
  })
  createdAt: Date;

  @Column('timestamp with time zone', {
    name: 'account_updated_at',
    nullable: true,
  })
  updatedAt?: Date | number | null;

  @Column('timestamp with time zone', {
    name: 'account_deleted_at',
    nullable: true,
  })
  deletedAt?: Date | number | null;

  @OneToMany(() => ContactEntity, (contact) => contact.account)
  contacts: ContactEntity[];
}
