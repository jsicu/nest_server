/*
 * @Author: linzq
 * @Date: 2020-12-30 16:31:56
 * @LastEditors: linzq
 * @LastEditTime: 2021-01-05 09:35:50
 * @Description:
 */
import { Controller, Get } from '@nestjs/common';
import { UserService } from './cats.service';
import { UserEntity } from 'src/entity/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('list')
  findAll(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }
}
