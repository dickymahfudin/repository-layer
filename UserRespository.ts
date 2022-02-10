import { User } from '../models/User';
import { BaseRepository } from './BaseRepository';
import { remove } from './remove';

export type userType = Omit<User, remove>;

export class UserRepository extends BaseRepository<User, userType> {
  constructor() {
    super(User);
  }
}
