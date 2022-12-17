import { Module } from '@nestjs/common';
import { SecurityService } from './services/security.service';
import { AccountRepository } from './repositories/account.repository';
import { ContactRepository } from './repositories/contact.repository';
import { EmailRepository } from './repositories/email.repository';

@Module({
  imports: [],
  controllers: [],
  providers: [
    SecurityService,
    AccountRepository,
    ContactRepository,
    EmailRepository,
  ],
  exports: [SecurityService],
})
export class PostgresModule {}
