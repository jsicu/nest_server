/*
 * @Author: linzq
 * @Date: 2020-12-29 14:05:40
 * @LastEditors: linzq
 * @LastEditTime: 2021-01-05 09:37:09
 * @Description:
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from 'src/entity/user.entity';

@Injectable()
export class UserService {
  // 使用InjectRepository装饰器并引入Repository这样就可以使用typeorm的操作了
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  /**
   * find user by name
   * @param name
   */
  async find(name: string): Promise<UserEntity> {
    let user = await this.userRepository.query('select * from user');
    user = user.find((user) => user.name === name);
    if (user) return user;
    else return null;
  }

  // 获取所有用户数据列表(userRepository.query()方法属于typeoram)
  async listAll(): Promise<Array<UserEntity>> {
    return await this.userRepository.query('select * from user');
  }
}
// @Injectable()
// export class UserService {
//   private readonly users: Array<UserEntity>;

//   constructor() {
//     this.users = [
//       { id: 1, name: 'admin', password: 'admin' },
//       { id: 2, name: 'tester', password: 'tester' },
//     ];
//   }

//   /**
//    * find user by name
//    * @param name
//    */
//   async find(name: string): Promise<UserEntity> {
//     const user = this.users.find((user) => user.name === name);
//     if (user) return user;
//     else return null;
//   }

//   /**
//    * list all users
//    */
//   async listAll(): Promise<Array<UserEntity>> {
//     return this.users.map((user) => {
//       const { password, ...info } = user;
//       return info;
//     });
//   }
// }
