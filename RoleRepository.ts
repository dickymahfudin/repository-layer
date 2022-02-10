import { Role } from '../models/Role';
import { BaseRepository } from './BaseRepository';
import { remove } from './remove';

export type roleType = Omit<Role, remove>;

export class RoleRepository extends BaseRepository<Role, roleType> {
  constructor() {
    super(Role);
  }
}
