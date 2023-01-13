// Libraries
import { Module } from '@nestjs/common';

// Modules
import { PostgresModule } from './postgres';

@Module({
  imports: [PostgresModule],
  controllers: [],
  providers: [],
  exports: [PostgresModule],
})
export class DatabaseModule {}
