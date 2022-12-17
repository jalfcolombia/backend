// Libraries
import { Module } from '@nestjs/common';

// Modules
import { PostgresModule } from './postgres/postgres.module';

@Module({
  imports: [PostgresModule],
  controllers: [],
  providers: [],
  exports: [PostgresModule],
})
export class DatabaseModule {}
