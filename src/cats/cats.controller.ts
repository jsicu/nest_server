import { Controller, Get } from '@nestjs/common';
import { UserService } from './cats.service';
import { UserEntity } from '../entity/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('list')
  findAll(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }
}