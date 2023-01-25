// Libraries
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

// Main Module
import { AppModule } from './app.module';

// Configs
import { PipeValidator } from './infrastructure/configs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe(PipeValidator));
  await app.listen(3000);
}

bootstrap();
