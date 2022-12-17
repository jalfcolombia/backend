import { IsNull, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequestException } from '@nestjs/common';
import { EmailEntity } from '../entities/email.entity';
import { IEmailRepository } from '../../../../application/repositories/email.repository';

export class EmailRepository implements IEmailRepository<EmailEntity> {
  constructor(
    @InjectRepository(EmailEntity)
    private readonly clientRepository: Repository<EmailEntity>,
  ) {}

  async findAll(): Promise<EmailEntity[]> {
    return await this.clientRepository.findBy({ deletedAt: IsNull() });
  }

  async create(entity: EmailEntity): Promise<EmailEntity> {
    return await this.clientRepository.save(entity);
  }

  async update(id: string, entity: EmailEntity): Promise<EmailEntity> {
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

  async delete(id: string): Promise<EmailEntity> {
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
