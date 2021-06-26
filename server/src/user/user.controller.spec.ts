import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { getModelToken } from '@nestjs/mongoose';
import { UserService } from './user.service';

const mockUser = {
  id: 909,
  user_name: 'Lorem name',
  user_email: 'lorem@gmail.com',
  password: 'Some pass',
}

describe('UserController', () => {
  let controller: UserController;

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

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
