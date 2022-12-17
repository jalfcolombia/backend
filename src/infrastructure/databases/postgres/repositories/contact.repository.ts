import { ContactEntity } from './../entities/contact.entity';
import { IContactRepository } from '../../../../application/repositories/contact.repository';

export class ContactRepository implements IContactRepository<ContactEntity> {
  findAll(): Promise<ContactEntity[]> {
    throw new Error('Method not implemented.');
  }
  create(entity: ContactEntity): Promise<ContactEntity> {
    throw new Error('Method not implemented.');
  }
  update(entity: ContactEntity): Promise<ContactEntity | null> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<ContactEntity | null> {
    throw new Error('Method not implemented.');
  }
}
