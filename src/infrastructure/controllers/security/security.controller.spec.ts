import { Test, TestingModule } from '@nestjs/testing';
import { SecurityController } from './security.controller';
import { PostgresModule } from '../../databases/postgres/postgres.module';

describe('SecurityController', () => {
  let controller: SecurityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PostgresModule],
      controllers: [SecurityController],
    }).compile();

    controller = module.get<SecurityController>(SecurityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
