import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { getModelToken } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { User } from '../interfaces/user.interface';

const mockUser = {
  id: 909,
  user_name: 'Lorem name',
  user_email: 'lorem@gmail.com',
  password: 'Some pass',
}

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: getModelToken('User'),
          useValue: mockUser,
        },
        UserService,
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
