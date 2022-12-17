import { IsNull, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequestException } from '@nestjs/common';
import { ContactEntity } from './../entities/contact.entity';
import { IContactRepository } from '../../../../application/repositories/contact.repository';

export class ContactRepository implements IContactRepository<ContactEntity> {
  constructor(
    @InjectRepository(ContactEntity)
    private readonly clientRepository: Repository<ContactEntity>,
  ) {}

  async findAll(): Promise<ContactEntity[]> {
    return await this.clientRepository.findBy({ deletedAt: IsNull() });
  }

  async create(entity: ContactEntity): Promise<ContactEntity> {
    return await this.clientRepository.save(entity);
  }

  async update(id: string, entity: ContactEntity): Promise<ContactEntity> {
    let entityToUpdate = await this.clientRepository.findOneBy({
      id,
      deletedAt: IsNull(),
    });
    if (entityToUpdate) {
      entityToUpdate = { ...entityToUpdate, ...entity };
      return await this.clientRepository.save(entityToUpdate);
    }
    throw new BadRequestException(`ID "${id}" does not exist in database`);
  }

  async delete(id: string): Promise<ContactEntity> {
    const entityToDelete = await this.clientRepository.findOneBy({
      id,
      deletedAt: IsNull(),
    });
    if (entityToDelete) {
      entityToDelete.deletedAt = new Date();
      return await this.clientRepository.save(entityToDelete);
    }
    throw new BadRequestException(`ID "${id}" does not exist in database`);
  }
}
