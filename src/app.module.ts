import { PostgresModule } from './infrastructure/databases/postgres/postgres.module';
import { MongoModule } from './infrastructure/databases/mongo/mongo.module';
import { Module } from '@nestjs/common';
import { AppController } from './infrastructure/controllers/app/app.controller';
import { SecurityController } from './infrastructure/controllers/security/security.controller';

@Module({
  imports: [PostgresModule, MongoModule],
  controllers: [AppController, SecurityController],
  providers: [],
})
export class AppModule {}
