// Libraries
import { Module } from '@nestjs/common';

// Infrastructure
import {
  AppController,
  DatabaseModule,
  EnvironmentsConfig,
  SecurityController,
} from './infrastructure';

@Module({
  imports: [DatabaseModule, EnvironmentsConfig()],
  controllers: [AppController, SecurityController],
  providers: [],
})
export class AppModule {}
