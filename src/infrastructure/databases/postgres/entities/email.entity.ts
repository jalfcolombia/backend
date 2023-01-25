import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { ContactEntity } from './contact.entity';
import { EmailDomainEntity } from '../../../../domain/entities/email.domain-entity';

@Index('email_contact_id_email_deleted_at_Idx', ['contactId', 'deletedAt'], {
  unique: true,
})
@Index('email_email_mail_email_deleted_at_Idx', ['deletedAt', 'mail'], {
  unique: true,
})
@Index('email_email_deleted_at_Idx', ['deletedAt'], {})
@Index('pkemail', ['id'], { unique: true })
@Entity('email', { schema: 'public' })
export class EmailEntity extends EmailDomainEntity {
  @Column('uuid', {
    primary: true,
    name: 'email_id',
    default: () => 'uuid_generate_v4()',
  })
  id: string;

  @Column('uuid', { name: 'contact_id' })
  contactId: string;

  @Column('character varying', { name: 'email_mail', length: 500 })
  mail: string;

  @Column('boolean', { name: 'email_status', default: () => 'true' })
  status: boolean;

  @Column('timestamp with time zone', {
    name: 'email_created_at',
    default: () => 'now()',
  })
  createdAt: Date;

  @Column('timestamp with time zone', {
    name: 'email_updated_at',
    nullable: true,
  })
  updatedAt?: Date | number | null;

  @Column('timestamp with time zone', {
    name: 'email_deleted_at',
    nullable: true,
  })
  deletedAt?: Date | number | null;

  @OneToOne(() => ContactEntity, (contact) => contact.emails, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'contact_id', referencedColumnName: 'id' }])
  contact: ContactEntity;
}
