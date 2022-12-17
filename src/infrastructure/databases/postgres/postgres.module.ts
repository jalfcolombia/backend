// Libraries
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Configs
import { PostgreSQLConfig } from './configs/postgresql.config';

// Services
import { SecurityService } from './services';

// Entities
import { AccountEntity, ContactEntity, EmailEntity } from './entities';

// Repositories
import {
  AccountRepository,
  ContactRepository,
  EmailRepository,
} from './repositories';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useClass: PostgreSQLConfig }),
    TypeOrmModule.forFeature([AccountEntity, ContactEntity, EmailEntity]),
  ],
  controllers: [],
  providers: [
    PostgreSQLConfig,
    TypeOrmModule,
    SecurityService,
    AccountRepository,
    ContactRepository,
    EmailRepository,
  ],
  exports: [PostgreSQLConfig, SecurityService],
})
export class PostgresModule {}
