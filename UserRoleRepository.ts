import { UserRole } from '../models/UserRole';
import { BaseRepository } from './BaseRepository';
import { remove } from './remove';

export type userRoleType = Omit<UserRole, remove>;

export class UserRoleRepository extends BaseRepository<UserRole, userRoleType> {
  constructor() {
    super(UserRole);
  }
}
