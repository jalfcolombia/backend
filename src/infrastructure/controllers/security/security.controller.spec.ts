import { Test, TestingModule } from '@nestjs/testing';
import { SecurityController } from './';
import { DatabaseModule } from '../../databases';
import { EnvironmentsConfig } from '../../configs';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AccountEntity } from '../../databases/postgres/entities';
import { Repository } from 'typeorm';

type MockType<T> = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  [P in keyof T]?: jest.Mock<{}>;
};

describe('SecurityController', () => {
  let controller: SecurityController;
  let repositoryMock: MockType<Repository<AccountEntity>>;
  const repositoryMockFactory: () => MockType<Repository<AccountEntity>> =
    jest.fn(() => ({
      save: jest.fn((data) => data),
    }));

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule, EnvironmentsConfig()],
      controllers: [SecurityController],
      providers: [
        {
          provide: getRepositoryToken(AccountEntity),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    controller = module.get<SecurityController>(SecurityController);
    repositoryMock = module.get(getRepositoryToken(AccountEntity));
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
