import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

export const EnvironmentsConfig = () =>
  ConfigModule.forRoot({
    envFilePath: join(
      process.cwd(),
      'environments',
      `.env.${process.env.SCOPE?.trimEnd()}`,
    ),
    isGlobal: true,
  });
