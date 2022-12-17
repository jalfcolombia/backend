// Libraries
import { Module } from '@nestjs/common';

// DataBase
import { DatabaseModule } from './infrastructure/databases/database.module';

// Configs
import { EnvironmentsConfig } from './infrastructure/configs/environments.config';

// Controllers
import {
  AppController,
  SecurityController,
} from './infrastructure/controllers';

@Module({
  imports: [DatabaseModule, EnvironmentsConfig()],
  controllers: [AppController, SecurityController],
  providers: [],
})
export class AppModule {}
