import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { EmailEntity } from './email.entity';
import { AccountEntity } from './account.entity';
import { ContactDomainEntity } from '../../../../domain/entities/contact.domain-entity';

@Index('contact_account_id_Idx', ['accountId'], {})
@Index('contact_contact_phone_contact_deleted_at_Idx', ['deletedAt', 'phone'], {
  unique: true,
})
@Index('contact_contact_deleted_at_Idx', ['deletedAt'], {})
@Index('pkcontact', ['id'], { unique: true })
@Entity('contact', { schema: 'public' })
export class ContactEntity extends ContactDomainEntity {
  @Column('uuid', {
    primary: true,
    name: 'contact_id',
    default: () => 'uuid_generate_v4()',
  })
  id: string;

  @Column('uuid', { name: 'account_id' })
  accountId: string;

  @Column('character varying', { name: 'contact_name', length: 500 })
  name: string;

  @Column('character varying', {
    name: 'contact_phone',
    nullable: true,
    length: 20,
  })
  phone: string | null;

  @Column('boolean', { name: 'contact_status', default: () => 'true' })
  status: boolean;

  @Column('timestamp with time zone', {
    name: 'contact_created_at',
    default: () => 'now()',
  })
  createdAt: Date;

  @Column('timestamp with time zone', {
    name: 'contact_updated_at',
    nullable: true,
  })
  updatedAt?: Date | number | null;

  @Column('timestamp with time zone', {
    name: 'contact_updated_at',
    nullable: true,
  })
  deletedAt?: Date | number | null;

  @ManyToOne(() => AccountEntity, (account) => account.contacts, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'account_id', referencedColumnName: 'id' }])
  account: AccountEntity;

  @OneToOne(() => EmailEntity, (email) => email.contact, {
    cascade: ['insert', 'update'],
  })
  emails: EmailEntity;
}
