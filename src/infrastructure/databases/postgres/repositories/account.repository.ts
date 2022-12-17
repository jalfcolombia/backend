import { IsNull, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';
import { AccountEntity } from '../entities/account.entity';
import { IAccountRepository } from '../../../../application/repositories/account.repository';

@Injectable()
export class AccountRepository implements IAccountRepository<AccountEntity> {
  constructor(
    @InjectRepository(AccountEntity)
    private readonly clientRepository: Repository<AccountEntity>,
  ) {}

  async findAll(): Promise<AccountEntity[]> {
    return await this.clientRepository.findBy({ deletedAt: IsNull() });
  }

  async findById(id: string): Promise<AccountEntity> {
    const entity = await this.clientRepository.findOneBy({
      id,
      deletedAt: IsNull(),
    });
    if (entity) return entity;
    throw new BadRequestException(`ID "${id}" does not exist in database`);
  }

  async create(entity: AccountEntity): Promise<AccountEntity> {
    return await this.clientRepository.save(entity);
  }

  async update(id: string, entity: AccountEntity): Promise<AccountEntity> {
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

  async delete(id: string): Promise<AccountEntity> {
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
