/*
 * @Author: linzq
 * @Date: 2020-12-29 14:05:55
 * @LastEditors: linzq
 * @LastEditTime: 2021-01-05 09:36:31
 * @Description:
 */
import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from 'src/entity/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
    this.userService = userService;
  }

  @Get()
  async list(): Promise<Array<UserEntity>> {
    return this.userService.listAll();
  }
}
