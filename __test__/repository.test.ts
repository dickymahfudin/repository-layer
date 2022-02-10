import 'reflect-metadata';
import config from '../../../../config/ormconfig';
import { createConnection, getConnection } from 'typeorm';
import { UserRepository } from '../UserRespository';

const user = {
  email: 'repo@test.com',
  password: '123456',
  firstName: 'repo',
  middleName: 'unit',
  lastName: 'testing',
  gender: 'male',
  referral: 'MXCGY',
};

describe('Repository', () => {
  beforeAll(async () => {
    await createConnection(config);
  });

  afterAll(async () => {
    await getConnection().close();
  });

  describe('Base Repository', () => {
    let userId: number;

    it('create BaseRepository Entity User', async () => {
      const userRepo = new UserRepository();
      const create = await userRepo.create(user);
      expect(create.email).toBe(user.email);
    });
  });
});
