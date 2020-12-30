import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from '../entity/user.entity';

@Injectable()
export class UserService {
  private readonly users: Array<UserEntity>;

  constructor() {
    this.users = [
      { id: 1, name: 'admin', password: 'admin' },
      { id: 2, name: 'tester', password: 'tester' },
    ];
  }

  /**
   * find user by name
   * @param name
   */
  async find(name: string): Promise<UserEntity> {
    const user = this.users.find((user) => user.name === name);
    if (user) return user;
    else return null;
  }

  /**
   * list all users
   */
  async listAll(): Promise<Array<UserEntity>> {
    return this.users.map((user) => {
      const { password, ...info } = user;
      return info;
    });
  }
}
