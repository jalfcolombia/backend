import { EmailEntity } from '../entities/email.entity';
import { IEmailRepository } from '../../../../application/repositories/email.repository';

export class EmailRepository implements IEmailRepository<EmailEntity> {
  findAll(): Promise<EmailEntity[]> {
    throw new Error('Method not implemented.');
  }
  create(entity: EmailEntity): Promise<EmailEntity> {
    throw new Error('Method not implemented.');
  }
  update(entity: EmailEntity): Promise<EmailEntity | null> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<EmailEntity | null> {
    throw new Error('Method not implemented.');
  }
}
