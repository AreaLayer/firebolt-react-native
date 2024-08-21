import { IUser } from './user.interface';
import { User } from './user.entity';
import { Bitcoin } from './Watch-only';

const user: IUser = {
  id: 1,
  name: 'User',
  email: '<EMAIL>',
  password: '<PASSWORD>',
};

export const users: User[] = [user];

export const mockUsersRepository = {
  findOne: jest.fn(),
  save: jest.fn(),
};

jest.mock('./user.repository', () => ({
  UsersRepository: jest.fn().mockImplementation(() => mockUsersRepository),
}));

describe('UserRepository', () => {
  it('should be defined', () => {
    expect(UsersRepository).toBeDefined();
  });
});

describe('User', () => {
  it('should be defined', () => {
    expect(User).toBeDefined();
  });
});

describe('User.repository', () => {
  it('should be defined', () => {
    expect(UsersRepository).toBeDefined();
  });

  it('should be able to find a user', async () => {
    const user = await UsersRepository.findOne(1);