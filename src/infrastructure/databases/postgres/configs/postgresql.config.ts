// Libraries
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

// Entities
import { AccountEntity, ContactEntity, EmailEntity } from '../entities';

@Injectable()
export class PostgreSQLConfig implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get<string>('SQL_HOST'),
      port: this.configService.get<number>('SQL_PORT'),
      username: this.configService.get<string>('SQL_USER'),
      password: this.configService.get<string>('SQL_PASSWORD'),
      database: this.configService.get<string>('SQL_DATABASE'),
      entities: [AccountEntity, ContactEntity, EmailEntity],
    };
  }
}
